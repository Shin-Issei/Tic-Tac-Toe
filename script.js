// The first thing to do is to relate the grid on the board to reflect what is going on in the array.
const body = document.querySelector("body");

let gameboard = ["____", "____","____","____","____","____","____","____","____"];
const newGame = document.querySelector("#gameStart");
const displayBoard = document.querySelector("#game-board");
let turnNumber = 1;
let turntotal = 1;
const makeNewGame = () => {
    let i = 0;
    while (i < 9){
    const space = document.createElement("button");
    space.textContent = "____";
    space.setAttribute("data-id", i);
    space.addEventListener("click", () =>{
                // console.log();
                if(space.textContent === "X" || space.textContent === "O"){
                    return;
                }
                if (turnNumber % 2 == 0){
                    space.textContent = "O";
                    gameboard[space.getAttribute("data-id")] = "O"
                }
                else{
                    space.textContent = "X"
                    gameboard[space.getAttribute("data-id")] = "X"
                }
                turnNumber++;
                if(turnNumber > 3){
                    if(space.textContent !== "")
                    checkWinner()
                }

    })
    displayBoard.appendChild(space);
    i++;
    }
    
}

newGame.addEventListener("click", () =>{
    makeNewGame();
} );   
function checkWinner(){
    // Row Winners START

    if (gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]){
        if(gameboard[0] === "____"){
            return;
        }
        console.log("Winnar!~ 1");
    }
    if (gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]){
        if(gameboard[3] === "____"){
            return;
        }
        console.log("Winnar!~ 2");
    }
    if (gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]){
        if(gameboard[6] === "____"){
            return;
        }
       console.log("Winnar!~ 3");
   }
   //Row Winners END
   //Column Winners START

   if (gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]){
        if(gameboard[0] === "____"){
            return;
        }

       console.log("Winnar!~ 4");
   }
    if (gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]){
        if(gameboard[1] === "____"){
            return;
        }

       console.log("Winnar!~ 5");
   }
    if (gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]){
        if(gameboard[2] === "____"){
            return;
        }

       console.log("Winnar!~ 6");
   }
   
   //Column Winners END
   
   //Diagonal Winners
   
   if (gameboard[0] === gameboard[5] && gameboard[0] === gameboard[8]){
    if(gameboard[0] === "____"){
        return;
    }

       console.log("Winnar!~ 7");
   }
   if (gameboard[2] === gameboard[5] && gameboard[2] === gameboard[6]){
    if(gameboard[2] === "____"){
        return;
    }

      console.log("Winnar!~ 8");
  }

}




