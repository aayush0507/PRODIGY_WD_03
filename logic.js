let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = false; 
let count = 0; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
          } else {
            //playerX
            box.innerText = "X";
            turnO = true;
          }
          box.disabled = true;
          count++;
          let isWinner = checkWinner();
          if (count === 9 && !isWinner) {
            gameDraw();
          }
  });
})
const checkWinner = () => {
    

   for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          //console.log("Winner"+pos1Val);
          return true;
        }
      }
    }
  };


  const resetGame = () => {
    turnO = false;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  

  const showWinner = (winner) => {
    let win = "O"
    if(winner=='X') win = "X"
    msg.innerText = `The Winner is ${win}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

  