class Board {

    constructor(size) {
        this.board = [];
        this.size = size;

        for(var i = 0; i < this.size; i++) {
            this.board[i] = new Array(this.size);
        }
    }

    addCell(x, y, value) {
        board[x][y] = value;
    }
}