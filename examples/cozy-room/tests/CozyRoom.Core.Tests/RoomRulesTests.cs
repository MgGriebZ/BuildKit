using CozyRoom.Core;
using Xunit;

namespace CozyRoom.Core.Tests;

public sealed class RoomRulesTests
{
    [Fact]
    public void ThreeStyleCycleVisitsEachChoiceAndReturnsToFirst()
    {
        var state = new RoomState();
        foreach (var expected in new[] { 1, 2, 0 })
        {
            state = RoomRules.NextStyle(state);
            Assert.Equal(expected, state.LampStyle);
        }
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    public void SaveRoundTripRetainsChoiceAndIdentifiers(int style)
    {
        var read = RoomRules.Read(RoomRules.Write(new(style)));
        Assert.Equal(SaveStatus.Saved, read.Status);
        Assert.Equal(style, read.State.LampStyle);
        Assert.True(read.MayWrite);
    }

    [Fact]
    public void NoSaveAllowsFirstChoiceToBeSaved()
    {
        var read = RoomRules.Read(null);
        Assert.Equal(SaveStatus.Missing, read.Status);
        Assert.Equal(0, read.State.LampStyle);
        Assert.True(read.MayWrite);
    }

    [Theory]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":0}", 0)]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":1}", 1)]
    public void OriginalR1VersionOneSaveRetainsChoiceAndCanContinue(string json, int expected)
    {
        var read = RoomRules.Read(json);
        Assert.Equal(SaveStatus.Saved, read.Status);
        Assert.Equal(expected, read.State.LampStyle);
        Assert.True(read.MayWrite);
        Assert.Equal(expected + 1, RoomRules.NextStyle(read.State).LampStyle);
        Assert.Equal(json, RoomRules.Write(read.State));
    }

    [Theory]
    [InlineData("")]
    [InlineData("broken")]
    [InlineData("null")]
    [InlineData("[]")]
    [InlineData("{}")]
    [InlineData("{\"version\":\"1\"}")]
    [InlineData("{\"version\":0}")]
    [InlineData("{\"version\":1}")]
    [InlineData("{\"version\":1,\"roomId\":\"other\",\"objectId\":\"lamp\",\"lampStyle\":0}")]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"other\",\"lampStyle\":0}")]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":-1}")]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":3}")]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":0.5}")]
    [InlineData("{\"version\":1,\"roomId\":\"cozy-room\",\"objectId\":\"lamp\",\"lampStyle\":\"0\"}")]
    public void InvalidSaveNeverGrantsWritePermission(string json)
    {
        var read = RoomRules.Read(json);
        Assert.Equal(SaveStatus.Invalid, read.Status);
        Assert.Equal(0, read.State.LampStyle);
        Assert.False(read.MayWrite);
    }

    [Fact]
    public void FutureVersionIsPreservedWithoutAssumingItsSchema()
    {
        var read = RoomRules.Read("{\"version\":2,\"unknown\":true}");
        Assert.Equal(SaveStatus.FutureVersion, read.Status);
        Assert.False(read.MayWrite);
    }

    [Fact]
    public void OversizeSaveIsNotAccepted() =>
        Assert.False(RoomRules.Read(new string(' ', 4097)).MayWrite);

    [Theory]
    [InlineData(-1)]
    [InlineData(3)]
    public void InvalidInMemoryStateCannotBeCycledOrWritten(int style)
    {
        Assert.Throws<ArgumentOutOfRangeException>(() => RoomRules.NextStyle(new(style)));
        Assert.Throws<ArgumentOutOfRangeException>(() => RoomRules.Write(new(style)));
    }
}
