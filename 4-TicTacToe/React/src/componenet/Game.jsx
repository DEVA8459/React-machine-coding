import { useState, useEffect } from "react";

const Game = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [won, setWon] = useState(null);
  const handleClick = (e) => {
    const position = e.target.id;
    console.log(position);

    const copyMatrix = [...square];
    copyMatrix[position] = isXturn ? "X" : "O";
    setSquare(copyMatrix);
    setIsXturn((prevTurn) => !prevTurn);
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
        setWon(square[a]);
      }
    }
    return null;
  };
  useEffect(() => {
    decideWinner();
  }, [square]);
  const handleReset = () => {
    setSquare(Array(9).fill(null));
    setIsXturn(true);
    setWon(null);
  };

  return (
    <div className="App" >
      <h1>Tic Toc Toe</h1>
      <div className="board" onClick={handleClick}>
        {square.map((items, index) => (
          <div key={index} id={index} className="box">
            {items}
          </div>
        ))}
      </div>
      <div className="game-info">
        <button onClick={handleReset}> Reset</button>
        <div>Next Player :{isXturn ? "X" : "O"}</div>
        {won && <div>{won} player Won the Game</div>}
      </div>
    </div>
  );
};

export default Game;
