class BoardUpdater {
    constructor(switchesCounter, boardChecker, endGame) {
        this.switchesCounter = switchesCounter;
        this.boardChecker = boardChecker;
        this.endGame = endGame;
    }

    update(board) {
        var allButtons = document.getElementsByTagName("button");
        for (let i = 0; i < allButtons.length; i++) {
            var button = allButtons.item(i);

            let currentCell = board.getCellAt(Math.floor(i / board.size), i % board.size)
            if (currentCell == -1) {
                button.innerHTML = ".";
            }
            else{
                button.innerHTML = currentCell;
            }
        }
        if (this.boardChecker.ended(board.getFlattenedBoard())) {
            this.endGame.end(allButtons);
        }
    }
}

export { BoardUpdater };