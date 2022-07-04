class SwitchesCounter {
    constructor(board) {
        this.board = board;
    }

    count(shuffledGameNumbers) {
        var switchesCount = 0;
        shuffledGameNumbers.forEach(number => {
            for (let i = 0; i < this.board.size; i++) {
                for (let j = i; j < this.board.size; j++) {
                    if (this.board.getCellAt(i, j) < number) {
                        switchesCount++;
                    }
                }
            }
        });
        return switchesCount;
    }
}

export { SwitchesCounter };