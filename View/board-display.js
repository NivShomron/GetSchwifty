import ActionValidator from "./Controller/action-validator"
function display(actionValidator) {
    var size = 3;
    for(let i = 1; i <= size; i++) { 
        var toAdd = document.createDocumentFragment();
        var div = document.createElement("div")
        toAdd.appendChild(div);
        for(let j = 1; j <= size; j++){
            var btn = document.createElement("button");
            btn.innerHTML = 0; 
            btn.addEventListener("click", () => {
                alert(i);
                alert(j);
                actionValidator.validate([i, j]);
            });
            toAdd.appendChild(btn);
        }
        document.body.appendChild(toAdd);
    }
}