class BoardChecker {
    ended(cellsValues) {
        var ended = true;
        for (let i = 0; i < cellsValues.length; i++) {
            if (cellsValues[i] != -1 && cellsValues[i] != i+1) {
                ended = false;
            }
        }
        return ended;
    }
}

export { BoardChecker };