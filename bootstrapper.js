import ActionExecuter from "./Controller/action-executer"
import ActionValidator from "./Controller/action-validator"
import ArrayShuffler from "./Controller/array-shuffler"
import BoardCreator from "./Controller/board-creator"
import BoardValidator from "./Controller/board-validator"
import Board from "./Controller/board"
import CellsValuesCreator from "./Controller/cells_values_creator"
import BoardDisplay from "./View/board-display"

class Bootstrapper {
    constructor() {
        var board = new Board(3);

        var boardValidator = new BoardValidator();
        var arrayShuffler = new ArrayShuffler();

        var cellsValuesCreator = new CellsValuesCreator(board, arrayShuffler)
        var BoardCreator = new BoardCreator(board, boardValidator, cellsValuesCreator);

        var actionExecuter = new ActionExecuter(board);
        var actionValidator = new ActionValidator(board, actionExecuter);

        var boardDisplay = new BoardDisplay(actionValidator);
    }
}