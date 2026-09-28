using System.Text.Json;

namespace CozyRoom.Core;

public enum SaveStatus { Missing, Saved, Invalid, FutureVersion }

public sealed record RoomState(int LampStyle = 0);
public sealed record SaveRead(SaveStatus Status, RoomState State)
{
    public bool MayWrite => Status is SaveStatus.Missing or SaveStatus.Saved;
}

public static class RoomRules
{
    public const int SaveVersion = 1;
    public const int StyleCount = 2;
    public const string RoomId = "cozy-room";
    public const string LampId = "lamp";
    public const string StorageKey = "buildwithgriebz.cozy-room.baseline.v1";

    public static RoomState NextStyle(RoomState state)
    {
        ArgumentNullException.ThrowIfNull(state);
        if (state.LampStyle < 0 || state.LampStyle >= StyleCount)
            throw new ArgumentOutOfRangeException(nameof(state));
        return state with { LampStyle = (state.LampStyle + 1) % StyleCount };
    }

    public static SaveRead Read(string? json)
    {
        if (json is null) return new(SaveStatus.Missing, new());
        if (json.Length > 4096) return new(SaveStatus.Invalid, new());
        try
        {
            using var document = JsonDocument.Parse(json);
            var root = document.RootElement;
            if (root.ValueKind != JsonValueKind.Object ||
                !root.TryGetProperty("version", out var versionElement) ||
                !versionElement.TryGetInt32(out var version))
                return new(SaveStatus.Invalid, new());
            if (version > SaveVersion) return new(SaveStatus.FutureVersion, new());
            if (version != SaveVersion ||
                !HasString(root, "roomId", RoomId) || !HasString(root, "objectId", LampId) ||
                !root.TryGetProperty("lampStyle", out var styleElement) ||
                styleElement.ValueKind != JsonValueKind.Number ||
                !styleElement.TryGetInt32(out var style) || style < 0 || style >= StyleCount)
                return new(SaveStatus.Invalid, new());
            return new(SaveStatus.Saved, new(style));
        }
        catch (JsonException) { return new(SaveStatus.Invalid, new()); }
        catch (InvalidOperationException) { return new(SaveStatus.Invalid, new()); }
    }

    public static string Write(RoomState state)
    {
        ArgumentNullException.ThrowIfNull(state);
        if (state.LampStyle < 0 || state.LampStyle >= StyleCount)
            throw new ArgumentOutOfRangeException(nameof(state));
        return JsonSerializer.Serialize(new
        {
            version = SaveVersion, roomId = RoomId, objectId = LampId, lampStyle = state.LampStyle
        });
    }

    private static bool HasString(JsonElement root, string name, string expected) =>
        root.TryGetProperty(name, out var value) && value.ValueKind == JsonValueKind.String &&
        value.GetString() == expected;
}
