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
        square.addEventListener('mouseover', () => square.classList.add("painted"));
        row.appendChild(square);
    }

    container.appendChild(row);
}
