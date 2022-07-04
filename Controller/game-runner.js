class GameRunner {
    constructor(board, boardCreator, gameDisplay, leaderboard, stopwatch, 
        scoreCreator, userInput) {
        this.board = board;
        this.boardCreator = boardCreator;
        this.gameDisplay = gameDisplay;
        this.leaderboard = leaderboard;
        this.stopwatch = stopwatch;
        this.scoreCreator = scoreCreator;
        this.userInput = userInput;
    }
    
    run() {
        var startTime = Date.now();
        this.stopwatch.startStopwatch();

        this.boardCreator.create(this.board);
        this.gameDisplay.display(this.board);
        
        this.stopwatch.stop()

        var name = this.userInput.receiveName();
        
        var score = this.scoreCreator.create(name, this.stopwatch.elapsedTime, 
            this.board.size, startTime);
            
        this.leaderboard.addScore(score);
    }
}

export { GameRunner };