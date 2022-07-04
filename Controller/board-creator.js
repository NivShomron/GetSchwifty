class BoardCreator {
    constructor(boardValidator, cellsValuesCreator, switchesCounter) {
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
        this.switchesCounter = switchesCounter;
    }

    create(board) {
        do {
            var cellsValues = this.cellsValuesCreator.create();
            var insertPoisiton = 0;
            cellsValues.forEach(number => {
                board.addCell(Math.floor(insertPoisiton / board.size), insertPoisiton % board.size, number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(board.size, this.switchesCounter.count(cellsValues), board.getEmptyCell()[1]));
    }
}

export { BoardCreator };