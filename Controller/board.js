class Board {
    constructor(size) {
        this.board = [];
        this.size = size;

        for(let i = 0; i < this.size; i++) {
            this.board[i] = new Array(this.size);
        }
    }

    addCell(x, y, value) {
        board[x][y] = value;
    }

    getEmptyCell() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (board[i][j] == undefined) {
                    return (x, y);
                }
            }
        }
    }

    getSwitchesCount(shuffledGameNumbers) {
        var switchesCount = 0;
        shuffledGameNumbers.forEach(number => {
            for (let i = 0; i < this.size; i++) {
                for (let j = i; j < this.size; j++) {
                    if (board[i][j] < number) {
                        switchesCount++;
                    }
                }
            }
        });
        return switchesCount;
    }
}