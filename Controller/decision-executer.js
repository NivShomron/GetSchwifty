import "./board"
class DecisionExecuter {
    constructor(board) {
        this.board = board;
    }

    execute(cellDecision) {
        var cellValue = this.board[cellDecision[0]][cellDecision[1]];
        var emptyCell = this.board.getEmptyCell();

        this.board[emptyCell[0]][emptyCell[1]] = cellValue;
        this.board[cellDecision[0]][cellDecision[1]] = undefined;
        // display changes
    }
}