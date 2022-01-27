function makeEtchEventListener(square) {
    return function () {
        square.classList.add("painted");
    };
}

// create the square divs in the container
let container = document.querySelector("#grid-container");

// create rows
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    //create squares
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = (800 / 16).toString() + "px";
        square.style.width = (800 / 16).toString() + "px";
        square.addEventListener('mouseover', () => square.classList.add("painted"));
        row.appendChild(square);
    }

    container.appendChild(row);
}


// Reset and resize grid
function reset(newSize) {
    let container = document.querySelector("#grid-container");
    container.innerHTML = '';
    
    for (let i = 0; i < newSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
    
        //create squares
        for (let j = 0; j < newSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");

            // change size so as to always take up the same space.
            square.style.height = (800 / newSize).toString() + "px";
            square.style.width = (800 / newSize).toString() + "px";

            square.addEventListener('mouseover', () => square.classList.add("painted"));
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', function() {
    reset(prompt("New Size: "));
});