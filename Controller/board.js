class Board {
    constructor(integerUserInput) {
        this.board = [];
        this.size = integerUserInput.receive();

        for(let i = 0; i < this.size; i++) {
            this.board[i] = new Array(this.size);
        }
    }

    getCellAt(x, y) {
        return this.board[x][y];
    }

    setCellAt(x, y, value) {
        this.board[x][y] = value;
    }

    addCell(x, y, value) {
        this.board[x][y] = value;
    }

    getEmptyCell() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] == -1) {
                    return [i, j];
                }
            }
        }
    }

    getFlattenedBoard() {
        return [].concat.apply([], this.board);
    }
}

export { Board };