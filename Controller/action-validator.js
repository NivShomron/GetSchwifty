import "./board"

class ActionValidator {
    constructor(board, actionExecuter) {
        this.board = board;
        this.actionExecuter = actionExecuter;
    }

    validate(cellDecision) {
        var emptyCell = this.board.getEmptyCell()
        // check if cellDecision is adjacent to empty cell
        if (true) {
            this.actionExecuter.execute(cellDecision);
        }
    }
}