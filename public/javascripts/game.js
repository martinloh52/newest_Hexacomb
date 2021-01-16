let containerDiv = document.querySelector(".game-board-divs");
let rows = containerDiv.children;

for(let i = 0; i < rows.length; i++){
    rows[i].id = "Row " + i;

    let buttonsInRow = rows[i].children;
    for(let j = 0; j < buttonsInRow.length; j++){
        buttonsInRow[j].id = i + "," + j;

        buttonsInRow[j].addEventListener("click", alertMyId);
    }
}

function alertMyId() {
    alert("My ID is " + this.id);
}



