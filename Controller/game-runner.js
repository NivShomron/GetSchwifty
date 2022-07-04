class GameRunner {
    constructor(board, boardCreator, gameDisplay, leaderboard, stopwatch, 
        scoreCreator, stringUserInput) {
        this.board = board;
        this.boardCreator = boardCreator;
        this.gameDisplay = gameDisplay;
        this.leaderboard = leaderboard;
        this.stopwatch = stopwatch;
        this.scoreCreator = scoreCreator;
        this.stringUserInput = stringUserInput;
    }
    
    run() {
        var name = this.stringUserInput.receive();

        var startTime = Date.now();
        this.stopwatch.start();

        this.boardCreator.create(this.board);
        this.gameDisplay.display(this.board);
        
        // while (this.stopwatch.running) {};

        var score = this.scoreCreator.create(name, this.stopwatch.elapsedTime, 
            this.board.size, startTime);

        this.leaderboard.addScore(score);
    }
}

export { GameRunner };