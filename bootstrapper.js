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
        var boardCreator = new BoardCreator(board, boardValidator, cellsValuesCreator);

        var actionExecuter = new ActionExecuter(board);
        var actionValidator = new ActionValidator(board, actionExecuter);

        boardCreator.create();
        var boardDisplay = new BoardDisplay(actionValidator);
    }
}