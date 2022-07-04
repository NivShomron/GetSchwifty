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
                this.board.addCell(Math.floor(insertPoisiton / 3), insertPoisiton % 3, number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(this.switchesCounter.count(cellsValues)));
    }
}

export { BoardCreator };