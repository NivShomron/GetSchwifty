class BoardValidator {
    
    validate(boardSize, switchesCount, emptyCellRow) {
        if (boardSize % 2 == 0) {
            if (switchesCount + emptyCellRow % 2 == 0) {
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