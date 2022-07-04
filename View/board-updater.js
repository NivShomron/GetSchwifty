class BoardUpdater {
    update(board) {
        var allButtons = document.getElementsByTagName("*");

        for (let i = 0; i < allButtons.length; i++) {
            button = allButtons.item(i);
            button.innerHTML = board.cellAt(i / 3, i % 3);
        }
    }
}