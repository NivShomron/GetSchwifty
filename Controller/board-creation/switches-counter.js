class SwitchesCounter {
    constructor(board) {
        this.board = board;
    }

    count() {
        var cellsValues = this.board.getFlattenedBoard(); 
        var switchesCount = 0;
        for (let i = 0; i < cellsValues.length; i++) {
            for (let j = i; j < cellsValues.length; j++) {
                if (cellsValues[i] != -1 && cellsValues[i] < cellsValues[j]) {
                    switchesCount++;
                }
            }
        }
        return switchesCount;
    }
}

export { SwitchesCounter };