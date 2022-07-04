class SwitchesCounter {
    constructor(board) {
        this.board = board;
    }

    count(cellsValues) {
        var switchesCount = 0;
        cellsValues.forEach(number => {
            if (number != "-1") {
                for (let i = 0; i < this.board.size; i++) {
                    for (let j = i; j < this.board.size; j++) {
                        if (this.board.getCellAt(i, j) != -1 &&
                                this.board.getCellAt(i, j) < number) {
                            switchesCount++;
                        }
                    }
                }
            }
        });
        return switchesCount;
    }
}

export { SwitchesCounter };