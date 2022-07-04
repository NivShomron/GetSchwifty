class ActionExecuter {
    constructor(board, actionValidator) {
        this.board = board;
        this.actionValidator = actionValidator;
    }

    execute(cellDecision) {
        if (this.actionValidator.validate(cellDecision)){
            var cellValue = this.board[cellDecision[0]][cellDecision[1]];
            var emptyCell = this.board.getEmptyCell();
    
            this.board[emptyCell[0]][emptyCell[1]] = cellValue;
            this.board[cellDecision[0]][cellDecision[1]] = undefined;
        }
    }
}