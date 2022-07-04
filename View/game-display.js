/*
function display() {
    var size = 3;

    for(let i = 0; i < size; i++) { 
        var toAdd = document.createDocumentFragment();
        var div = document.createElement("div")
        toAdd.appendChild(div);

        for(let j = 0; j < size; j++){
            let btn = document.createElement("button");

            btn.innerHTML = 0; 
            // btn.innerHTML = board[i][j];
            btn.addEventListener("click", () => {
                alert(i);
                alert(j);
                // actionExecuter.execute([i, j]);
                // boardUpdater.update(board);
            });
            toAdd.appendChild(btn);
        }
        document.body.appendChild(toAdd);
    }
}
*/

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
    
                btn.innerHTML = board.cellAt(i, j);
                btn.addEventListener("click", () => {
                    this.actionExecuter.execute(btn, [i, j]);
                    this.boardUpdater.update(board);
                });
                toAdd.appendChild(btn);
            }
            document.body.appendChild(toAdd);
        }
    }
}

export { GameDisplay };