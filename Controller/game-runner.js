class GameRunner {
    constructor(board, boardCreator, gameDisplay) {
        this.board = board;
        this.boardCreator = boardCreator;
        this.gameDisplay = gameDisplay;
    }
    
    run() {
        this.boardCreator.create(this.board);
        this.gameDisplay.display(this.board);
    }
}

export { GameRunner };