using CozyRoom.Core;
using Xunit;

namespace CozyRoom.Core.Tests;

public class StarRoundTests
{
    [Fact]
    public void FreshRoundHasNoCollectedStars()
    {
        var round = new StarRound();
        Assert.Equal(0, round.CollectedCount);
        Assert.False(round.IsComplete);
        for (var star = 0; star < StarRound.StarCount; star++)
            Assert.False(round.IsCollected(star));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    public void OnlyTheActivatedStarIsCollected(int star)
    {
        var original = new StarRound();
        var collected = original.Collect(star);
        Assert.Equal(0, original.CollectedCount);
        Assert.Equal(1, collected.CollectedCount);
        Assert.False(collected.IsComplete);
        for (var other = 0; other < StarRound.StarCount; other++)
            Assert.Equal(other == star, collected.IsCollected(other));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    public void RepeatedCollectionCannotAdvanceProgress(int star)
    {
        var collected = new StarRound().Collect(star);
        Assert.Equal(collected, collected.Collect(star).Collect(star));
        Assert.Equal(1, collected.Collect(star).CollectedCount);
    }

    [Theory]
    [InlineData(0, 1, 2)]
    [InlineData(0, 2, 1)]
    [InlineData(1, 0, 2)]
    [InlineData(1, 2, 0)]
    [InlineData(2, 0, 1)]
    [InlineData(2, 1, 0)]
    public void EveryCollectionOrderCompletesExactlyAtThree(int first, int second, int third)
    {
        var round = new StarRound().Collect(first);
        Assert.Equal(1, round.CollectedCount);
        round = round.Collect(second);
        Assert.Equal(2, round.CollectedCount);
        Assert.False(round.IsComplete);
        round = round.Collect(third);
        Assert.Equal(3, round.CollectedCount);
        Assert.True(round.IsComplete);
        Assert.Equal(round, round.Collect(first).Collect(second).Collect(third));
    }

    [Theory]
    [InlineData(-1)]
    [InlineData(3)]
    public void UnknownStarCannotBeReadOrCollected(int star)
    {
        var round = new StarRound();
        Assert.Throws<ArgumentOutOfRangeException>(() => round.IsCollected(star));
        Assert.Throws<ArgumentOutOfRangeException>(() => round.Collect(star));
    }
}
