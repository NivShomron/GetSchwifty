import "./board"
class ActionValidator {
    constructor(board) {
        this.board = board;
    }

    validate(cellDecision) {
        var emptyCell = this.board.getEmptyCell()
        // check if cellDecision is adjacent to empty cell
    }
}