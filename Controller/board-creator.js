class BoardCreator {
    constructor(board, boardValidator, cellsValuesCreator) {
        this.board = board;
        this.boardValidator = boardValidator;
        this.cellsValues = cellsValuesCreator.create(this.board);
    }

    create() {
        do {
            this.cellsValues.forEach(number => {
                this.board.addCell(number)
            });
        } while (this.boardValidator.validate(this.board.getSwitchesCount()));
    }
}