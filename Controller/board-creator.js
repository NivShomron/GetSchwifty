class BoardCreator {
    constructor(board, boardValidator, cellsValuesCreator) {
        this.board = board;
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
    }

    create() {
        do {
            var cellsValues = this.cellsValuesCreator.create(this.board);
            var insertPoisiton = 0;
            cellsValues.forEach(number => {
                this.board.addCell(insertPoisiton/3, insertPoisiton%3, number)
                insertPoisiton++;
            });
        } while (this.boardValidator.validate(this.board.getSwitchesCount()));
    }
}