class GameDisplay {
    constructor(actionExecuter, boardUpdater) {
        this.actionExecuter = actionExecuter;
        this.boardUpdater = boardUpdater;
    }

    display(board) {
        for(let i = 0; i < board.size; i++) { 
            var toAdd = document.createDocumentFragment();
            var div = document.createElement("div")
            toAdd.appendChild(div);
    
            for(let j = 0; j < board.size; j++){
                let btn = document.createElement("button");
                if (board.getCellAt(i, j) == -1) {
                    btn.innerHTML = ".";
                }
                else {
                    btn.innerHTML = board.getCellAt(i, j);
                }
                btn.addEventListener("click", () => {
                    this.actionExecuter.execute([i, j]);
                    this.boardUpdater.update(board);
                });
                toAdd.appendChild(btn);
            }
            document.body.appendChild(toAdd);
        }
        console.log(1)
    }
}

export { GameDisplay };