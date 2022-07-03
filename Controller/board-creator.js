class BoardCreator {
    constructor(board, arrayShuffler, boardValidator) {
        this.board = board;
        this.arrayShuffler = arrayShuffler;
        this.boardValidator = boardValidator;

        var gameNumbers = [];

        for(var i = 0; i < board.size; i++) {
            matrix[i] = new Array(board.size);
        }

        for(var i = 0; i < board.size * board.size; i++) {
            gameNumbers.push(i + 1);
        }

        this.removeRandom(gameNumbers);
        this.shuffledGameNumbers = arrayShuffler.shuffle(gameNumbers);
    }

    removeRandom = (array) => {
        while(array.length){
           const random = Math.floor(Math.random() * array.length);
           const el = array.splice(random, 1)[0];
           console.log(el);
        }
    };

    create() {
        do {
            shuffledGameNumbers.forEach(number => {
                this.board.addCell(number)
            });
        } while (this.boardValidator.validate(this.board.getSwitchesCount()));
    }
}