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
        var name = this.userInput.receiveName();

        var startTime = Date.now();
        this.stopwatch.start();

        this.boardCreator.create(this.board);
        this.gameDisplay.display(this.board);
        
        function checkStopwatchStatus() {
            if(this.stopwatch.running) {
               window.setTimeout(checkStopwatchStatus, 100);
            }
        }
               
        var score = this.scoreCreator.create(name, this.stopwatch.elapsedTime, 
            this.board.size, startTime);

        this.leaderboard.addScore(score);
    }
}

export { GameRunner };