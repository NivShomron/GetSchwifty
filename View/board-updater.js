class BoardUpdater {
    constructor(switchesCounter, endGame) {
        this.switchesCounter = switchesCounter;
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

        var cellsValues = board.getFlattenedBoard();
        if (this.switchesCounter.count(cellsValues) == 0) {
            this.endGame.end(allButtons);
        }
    }
}

export { BoardUpdater };