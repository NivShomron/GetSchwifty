class BoardUpdater {
    constructor(switchesCounter, endGame) {
        this.switchesCounter = switchesCounter;
        this.endGame = endGame;
    }

    update(board) {
        var allButtons = document.getElementsByTagName("*");
        for (let i = 0; i < allButtons.length; i++) {
            button = allButtons.item(i);
            button.innerHTML = board.cellAt(i / 3, i % 3);
        }

        if (this.switchesCounter.count() == 0) {
            this.endGame.end(allButtons);
        }
    }
}