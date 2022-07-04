class CellsValuesCreator {
    constructor(board, arrayShuffler) {
        this.board = board;
        this.arrayShuffler = arrayShuffler;
    }

    create() {
        var gameNumbers = [];

        for(var i = 0; i < this.board.size; i++) {
            matrix[i] = new Array(this.board.size);
        }

        for(var i = 0; i < this.board.size * this.board.size; i++) {
            gameNumbers.push(i + 1);
        }

        gameNumbers.splice(Math.floor(Math.random()*array.length), 1);
        return this.arrayShuffler.shuffle(gameNumbers);
    }
}

export { CellsValuesCreator };