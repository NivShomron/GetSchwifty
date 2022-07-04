class Board {
    constructor(size) {
        this.board = [];
        this.size = size;

        for(let i = 0; i < this.size; i++) {
            this.board[i] = new Array(this.size);
        }
    }

    cellAt(x, y) {
        return this.board[x][y];
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
}

export { Board };