import "./board"
import "./array-shuffler"
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

        this.removeRandomValue(gameNumbers);
        return this.arrayShuffler.shuffle(gameNumbers);
    }

    removeRandomValue = (array) => {
        while(array.length){
           const random = Math.floor(Math.random() * array.length);
           const el = array.splice(random, 1)[0];
           console.log(el);
        }
    };
}