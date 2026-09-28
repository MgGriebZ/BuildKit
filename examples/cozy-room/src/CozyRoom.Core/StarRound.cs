namespace CozyRoom.Core;

// A round lives only in memory. Lamp saves continue to use RoomState/RoomRules.
public sealed record StarRound(bool Window = false, bool Bed = false, bool Rug = false)
{
    public const int StarCount = 3;
    public int CollectedCount => (Window ? 1 : 0) + (Bed ? 1 : 0) + (Rug ? 1 : 0);
    public bool IsComplete => CollectedCount == StarCount;

    public bool IsCollected(int star) => star switch
    {
        0 => Window,
        1 => Bed,
        2 => Rug,
        _ => throw new ArgumentOutOfRangeException(nameof(star))
    };

    public StarRound Collect(int star) => star switch
    {
        0 => this with { Window = true },
        1 => this with { Bed = true },
        2 => this with { Rug = true },
        _ => throw new ArgumentOutOfRangeException(nameof(star))
    };
}
