import ActionExecuter from "./Controller/action-executer"
import ActionValidator from "./Controller/action-validator"
import ArrayShuffler from "./Controller/array-shuffler"
import BoardCreator from "./Controller/board-creator"
import BoardValidator from "./Controller/board-validator"
import Board from "./Controller/board"
import CellsValuesCreator from "./Controller/cells_values_creator"
import GameDisplay from "./View/game-display"
import InputValidator from "./Controller/input-validator"
import UserInput from "./View/user-input"
import Leaderboard from "./Model/leaderboard"
import SortByScore from "./Model/sort-by-score"
import EndGame from "./Controller/end-game"
import SwitchesCounter from "./Controller/switches-counter"
import BoardUpdater from "./View/board-updater"

function init() {
    var leaderboard = []
    var leaderboardSize = 5;
    var sortByScore = new SortByScore();

    var leaderboard = new Leaderboard(leaderboard, leaderboardSize, sortByScore);

    var inputValidator = new InputValidator();
    var userInput = new UserInput(inputValidator);
    var size = userInput.receiveInput();

    var board = new Board(size);

    var boardValidator = new BoardValidator();
    var arrayShuffler = new ArrayShuffler();

    var switchesCounter = new SwitchesCounter(board);
    var endGame = new EndGame();

    var cellsValuesCreator = new CellsValuesCreator(board, arrayShuffler)
    var boardCreator = new BoardCreator(board, boardValidator, cellsValuesCreator, switchesCounter);

    var actionValidator = new ActionValidator(board);
    var actionExecuter = new ActionExecuter(board, actionValidator);

    var boardUpdater = new BoardUpdater(switchesCounter, endGame);

    boardCreator.create();
    var gameDisplay = new GameDisplay(actionExecuter, boardUpdater);
    gameDisplay.display(board);
}