
let square = Array(9).fill(null);
let isXturn = true;
let winner = null;

const AppEl = document.getElementById("app");
const BoardEl = document.getElementById("board");
const currentPlayerDisplay = document.getElementById("current-player");
const winnerDisplay = document.getElementById("winner");
const resetButton = document.getElementById("reset");

let CreateBoard = () => {
  BoardEl.innerHTML = "";
  
  square.forEach((_, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.id = index;
    BoardEl.appendChild(box);
  });
  updateGameInfo();
};

BoardEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    handleClick(e);
  }
});

const handleClick = (e) => {
  const position = e.target.id;

  // Prevent further clicks if already filled or game is won
  if (square[position] || winner) return;

  square[position] = isXturn ? "X" : "O";
  e.target.textContent = square[position];
  isXturn = !isXturn;

  decideWinner();
  updateGameInfo();
};

const decideWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    let [a, b, c] = line;
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      winner = square[a];
      disableBoard();
      return;
    }
  }
};
const disableBoard = () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.add("disable"));
};
const updateGameInfo = () => {
  if (winner) {
    winnerDisplay.textContent = `${winner} won the game!`;
    currentPlayerDisplay.textContent = "";
  } else {
    currentPlayerDisplay.textContent = `Current Player: ${isXturn ? "X" : "O"}`;
    winnerDisplay.textContent = "";
  }
};

const resetGame = () => {
  square = Array(9).fill(null);
  isXturn = true;
  winner = null;
  CreateBoard();
};

// Add reset functionality
resetButton.addEventListener("click", resetGame);

CreateBoard();
