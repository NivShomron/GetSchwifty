class Score {
    constructor(name, gameLength, boardSize, startTime) {
        this.rank = -1;
        this.name = name;
        this.gameLength = gameLength;
        this.boardSize = boardSize;
        this.startTime = startTime;
    }

    changeRank(rank) {
        this.rank = rank; 
    }
}

export { Score };