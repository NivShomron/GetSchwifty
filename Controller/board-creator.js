class BoardCreator {
    constructor(board, boardValidator, cellsValuesCreator, switchesCounter) {
        this.board = board;
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
        this.switchesCounter = switchesCounter;
    }

    create() {
        do {
            var cellsValues = this.cellsValuesCreator.create(this.board);
            var insertPoisiton = 0;
            cellsValues.forEach(number => {
                this.board.addCell(Math.floor(insertPoisiton / this.board.size), insertPoisiton % this.board.size, number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(this.board.size, this.switchesCounter.count(cellsValues), this.board.getEmptyCell()[1]));
    }
}

export { BoardCreator };