// The first thing to do is to relate the grid on the board to reflect what is going on in the array.
// const body = document.querySelector("body");

let gameboard = ["", "", "", "", "", "", "", "", ""];
const newGame = document.querySelector("#gameStart");
const displayBoard = document.querySelector("#game-board");
const makeNewGame = () => {
    let i = 0;
    while (i < 9){
    const space = document.createElement("button");
    space.textContent = "____";
    displayBoard.appendChild(space);
    i++;
    }
}


newGame.addEventListener("click", makeNewGame);
