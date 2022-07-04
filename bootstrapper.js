import ActionExecuter from "./Controller/action-executer"
import ActionValidator from "./Controller/action-validator"
import ArrayShuffler from "./Controller/array-shuffler"
import BoardCreator from "./Controller/board-creator"
import BoardValidator from "./Controller/board-validator"
import Board from "./Controller/board"
import CellsValuesCreator from "./Controller/cells_values_creator"
import BoardDisplay from "./View/board-display"

function init(size) {
    var board = new Board(size);

    var boardValidator = new BoardValidator();
    var arrayShuffler = new ArrayShuffler();

    var cellsValuesCreator = new CellsValuesCreator(board, arrayShuffler)
    var boardCreator = new BoardCreator(board, boardValidator, cellsValuesCreator);

    var actionExecuter = new ActionExecuter(board, actionValidator);
    var actionValidator = new ActionValidator(board);

    boardCreator.create();
    var boardDisplay = new BoardDisplay(actionExecuter);
    boardDisplay.display(board);
}