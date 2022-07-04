import { ActionExecuter } from "./Controller/game-logic/action-executer.js";
import { ActionValidator } from "./Controller/game-logic/action-validator.js";
import { ArrayShuffler } from "./Controller/board-creation/array-shuffler.js";
import { BoardCreator } from "./Controller/board-creation/board-creator.js";
import { BoardValidator } from "./Controller/board-creation/board-validator.js";
import { Board } from "./Controller/board.js";
import { CellsValuesCreator } from "./Controller/board-creation/cells-values-creator.js";
import { GameDisplay } from "./View/output/game-display.js";
import { IntegerInputValidator } from "./Controller/input-validators/integer-input-validator.js";
import { StringInputValidator } from "./Controller/input-validators/string-input-validator.js";
import { StringUserInput } from "./View/input/string-user-input.js";
import { IntegerUserInput } from "./View/input/integer-user-input.js";
import { Leaderboard } from "./Model/leaderboard.js";
import { SortByScore } from "./Controller/leaderboard-logic/sort-by-score.js";
import { EndGame } from "./Controller/game-flow/end-game.js";
import { SwitchesCounter } from "./Controller/board-creation/switches-counter.js";
import { BoardUpdater } from "./View/output/board-updater.js";
import { Stopwatch } from "./Controller/time-measure/stopwatch.js";
import { GameRunner } from "./Controller/game-flow/game-runner.js"
import { ScoreCreator } from "./Model/score-creator.js";
import { BoardChecker } from "./Controller/game-logic/board-checker.js";

var starting_leaderboard = []
var leaderboardSize = 5;
var sortByScore = new SortByScore();

var leaderboard = new Leaderboard(starting_leaderboard, leaderboardSize, sortByScore);
var scoreCreator = new ScoreCreator();
var stopwatch = new Stopwatch();

var stringInputValidator = new StringInputValidator();
var integerInputValidator = new IntegerInputValidator();
var stringUserInput = new StringUserInput(stringInputValidator);
var integerUserInput = new IntegerUserInput(integerInputValidator);

var board = new Board(integerUserInput);

var boardValidator = new BoardValidator();
var arrayShuffler = new ArrayShuffler();

var switchesCounter = new SwitchesCounter(board);
var boardChecker = new BoardChecker();
var endGame = new EndGame(stopwatch);

var cellsValuesCreator = new CellsValuesCreator(board, arrayShuffler)
var boardCreator = new BoardCreator(boardValidator, cellsValuesCreator, switchesCounter, boardChecker);

var actionValidator = new ActionValidator(board);
var actionExecuter = new ActionExecuter(board, actionValidator);

var boardUpdater = new BoardUpdater(switchesCounter, boardChecker, endGame);

var gameDisplay = new GameDisplay(actionExecuter, boardUpdater);

var gameRunner = new GameRunner(board, boardCreator, gameDisplay, leaderboard, stopwatch,
     scoreCreator, stringUserInput);
gameRunner.run();