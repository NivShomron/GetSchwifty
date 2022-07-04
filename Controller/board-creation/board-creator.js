class BoardCreator {
    constructor(boardValidator, cellsValuesCreator, switchesCounter, boardChecker) {
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
        this.switchesCounter = switchesCounter;
        this.boardChecker = boardChecker;
    }

    create(board) {
        do {
            var cellsValues = this.cellsValuesCreator.create();
            var insertPoisiton = 0;
            cellsValues.forEach(number => {
                board.addCell(Math.floor(insertPoisiton / board.size), insertPoisiton % board.size,
                 number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(board, this.switchesCounter.count(), this.boardChecker));
    }
}

export { BoardCreator };