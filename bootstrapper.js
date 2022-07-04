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
import { Stopwatch } from "./Controller/stopwatch.js";
import { GameRunner } from "./Controller/game-runner.js"
import { ScoreCreator } from "./Model/score-creator.js"

var starting_leaderboard = []
var leaderboardSize = 5;
var sortByScore = new SortByScore();

var leaderboard = new Leaderboard(starting_leaderboard, leaderboardSize, sortByScore);
var scoreCreator = new ScoreCreator();
var stopwatch = new Stopwatch();

var inputValidator = new InputValidator();
var userInput = new UserInput(inputValidator);

var board = new Board(userInput);

var boardValidator = new BoardValidator();
var arrayShuffler = new ArrayShuffler();

var switchesCounter = new SwitchesCounter(board);
var endGame = new EndGame();

var cellsValuesCreator = new CellsValuesCreator(board, arrayShuffler)
var boardCreator = new BoardCreator(boardValidator, cellsValuesCreator, switchesCounter);

var actionValidator = new ActionValidator(board);
var actionExecuter = new ActionExecuter(board, actionValidator);

var boardUpdater = new BoardUpdater(switchesCounter, endGame);

var gameDisplay = new GameDisplay(actionExecuter, boardUpdater);

var gameRunner = new GameRunner(board, boardCreator, gameDisplay, leaderboard, stopwatch,
     scoreCreator, userInput);
gameRunner.run();