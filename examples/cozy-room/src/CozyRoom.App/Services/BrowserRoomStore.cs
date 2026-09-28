using CozyRoom.Core;
using Microsoft.JSInterop;

namespace CozyRoom.App.Services;

public sealed record BrowserRead(bool Available, string? Json);

public sealed class BrowserRoomStore(IJSRuntime js) : IAsyncDisposable
{
    private IJSObjectReference? _module;
    private async Task<IJSObjectReference> ModuleAsync() =>
        _module ??= await js.InvokeAsync<IJSObjectReference>("import", "./js/room-storage.js");

    public async Task<BrowserRead> ReadAsync()
    {
        try { return await (await ModuleAsync()).InvokeAsync<BrowserRead>("read", RoomRules.StorageKey); }
        catch (JSException) { return new(false, null); }
    }

    public async Task<bool> WriteAsync(RoomState state)
    {
        try { return await (await ModuleAsync()).InvokeAsync<bool>("write", RoomRules.StorageKey, RoomRules.Write(state)); }
        catch (JSException) { return false; }
    }

    public async ValueTask DisposeAsync()
    {
        if (_module is not null)
        {
            try { await _module.DisposeAsync(); }
            catch (JSException) { }
        }
    }
}
