class ActionValidator {
    constructor(board) {
        this.board = board;
    }

    validate(cellDecision) {
        var emptyCell = this.board.getEmptyCell()
        
        if (Math.abs(cellDecision[0] - emptyCell[0]) == 1 &&
            cellDecision[1] - emptyCell[1] == 0) {
            return true;
        }
        else if (Math.abs(cellDecision[1] - emptyCell[1]) == 1 &&
            cellDecision[0] - emptyCell[0] == 0) {
            return true;
        }
        return false;
    }
}