class Leaderboard {
    constructor(leaderboard, leaderboardSize, sortStrategy) {
        this.leaderboard = leaderboard;
        this.leaderboardSize = leaderboardSize;
        this.sortStrategy = sortStrategy;
    }

    addScore(newScore) {
        if (this.leaderboard.length == this.leaderboardSize) {
            let lastScore = this.leaderboard.pop();
            lastScore.changeRank(-1);
        }
        this.leaderboard.push(newScore);
        this.reorderLeaderboard();
    }

    reorderLeaderboard() {
        this.sortStrategy.sort(this.leaderboard);
        this.updateRanks();
    }

    updateRanks() {
        for (let i = 0; i < this.leaderboard.length; i++) {
            this.leaderboard[i].changeRank(i + 1);
        }
    }
}

export { Leaderboard };