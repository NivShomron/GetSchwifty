class SortByScore {
    sort(leaderboard) {
        return leaderboard.sort(
            function(score1, score2) {
            var calculatedScore1 = score1[gameLength] / score1[boardSize];
            var calculatedScore2 = score2[gameLength] / score2[boardSize];
            return ((calculatedScore1 < calculatedScore2) ? -1 : 
                ((calculatedScore1 > calculatedScore2) ? 1 : 0));
        });
    }
}

export { SortByScore };