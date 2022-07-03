import "./board"
import "./board-validator"
import "./cells_values_creator"

class BoardCreator {
    constructor(board, boardValidator, cellsValuesCreator) {
        this.board = board;
        this.boardValidator = boardValidator;
        this.cellsValuesCreator = cellsValuesCreator;
    }

    create() {
        do {
            var cellsValues = this.cellsValuesCreator.create(this.board);
            cellsValues.forEach(number => {
                this.board.addCell(number)
            });
        } while (this.boardValidator.validate(this.board.getSwitchesCount()));
    }
}