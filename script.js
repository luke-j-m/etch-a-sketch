const container = document.querySelector(".container");

const refreshButton = document.querySelector("#refresh");
const changeGridButton = document.querySelector("#change-size");

refreshButton.addEventListener("click", refresh);

changeGridButton.addEventListener("click", changeGridSize);

function createSquares(numSquaresPerSide){
    const totalSquares = numSquaresPerSide ** 2;
    const width = 650 / numSquaresPerSide;

    for(let i = 1; i <= totalSquares; i++){
        const square = document.createElement("div");

        square.style.width = width + "px";
        square.style.height = width + "px";
        square.style.boxSizing = "border-box";
        square.style.backgroundColor = "lightgrey";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

function changeGridSize(){
    let numSquares = parseInt(prompt("Enter number of squares per side (max 100)"));

    if(numSquares < 1 || numSquares > 100){
        alert("Invalid number of squares per side");
        return;
    }

    deleteSquares();
    createSquares(numSquares);
    
}

function refresh(){
    for(const square of container.children){
        square.style.backgroundColor = "lightgrey";
    }
}

function deleteSquares(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

createSquares(32);