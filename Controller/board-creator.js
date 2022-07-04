class BoardCreator {
    constructor(board, boardValidator, cellsValuesCreator, switchCounter) {
        this.board = board;
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
        this.switchCounter = switchCounter;
    }

    create() {
        do {
            var cellsValues = this.cellsValuesCreator.create(this.board);
            var insertPoisiton = 0;
            cellsValues.forEach(number => {
                this.board.addCell(insertPoisiton/3, insertPoisiton%3, number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(this.switchCounter.count()));
    }
}