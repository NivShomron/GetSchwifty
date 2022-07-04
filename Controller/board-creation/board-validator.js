class BoardValidator {  
    validate(board, switchesCount, boardChecker) {
        if (boardChecker.ended(board.getFlattenedBoard())) {
            return false;
        }
        if (board.size % 2 == 0) {
            if ((switchesCount + board.getEmptyCell()[1]) % 2 == 0) {
                return true;
            }
            return false;
        }
        else { 
            if (switchesCount % 2 == 0) {
                return true;
            }
            return false;
        }
    }
}

export { BoardValidator };