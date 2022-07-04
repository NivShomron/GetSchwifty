import { ActionExecuter } from "./Controller/action-executer.js";
import { ActionValidator } from "./Controller/action-validator.js";
import { ArrayShuffler } from "./Controller/array-shuffler.js";
import { BoardCreator } from "./Controller/board-creator.js";
import { BoardValidator } from "./Controller/board-validator.js";
import { Board } from "./Controller/board.js";
import { CellsValuesCreator } from "./Controller/cells-values-creator.js";
import { GameDisplay } from "./View/game-display.js";
import { InputValidator } from "./Controller/input-validator.js";
import { UserInput } from "./View/user-input.js";
import { Leaderboard } from "./Model/leaderboard.js";
import { SortByScore } from "./Model/sort-by-score.js";
import { EndGame } from "./Controller/end-game.js";
import { SwitchesCounter } from "./Controller/switches-counter.js";
import { BoardUpdater } from "./View/board-updater.js";

var starting_leaderboard = []
var leaderboardSize = 5;
var sortByScore = new SortByScore();

var leaderboard = new Leaderboard(starting_leaderboard, leaderboardSize, sortByScore);

var inputValidator = new InputValidator();
var userInput = new UserInput(inputValidator);
var size = userInput.receiveBoardSize();

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