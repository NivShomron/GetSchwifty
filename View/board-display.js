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

/*
class BoardDisplay {
    constructor(actionExecuter) {
        this.actionExecuter = actionExecuter;
    }

    display(board) {
        var size = 3;

        for(let i = 0; i < size; i++) { 
            var toAdd = document.createDocumentFragment();
            var div = document.createElement("div")
            toAdd.appendChild(div);
    
            for(let j = 0; j < size; j++){
                let btn = document.createElement("button");
    
                btn.innerHTML = 0; 
                //btn.innerHTML = board[i][j];
                btn.addEventListener("click", () => {
                    alert(i);
                    alert(j);
                    // this.actionExecuter.execute(btn, [i, j]);
                    // boardUpdater.update(board);
                });
                toAdd.appendChild(btn);
            }
            document.body.appendChild(toAdd);
        }
    }
}
*/