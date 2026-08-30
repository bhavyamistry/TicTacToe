import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ currPlayer, changePlayer }) {
  const [gameboard, setGameBoard] = useState(initialGameBoard);

  function updateBox(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      console.log(currPlayer);
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = currPlayer;
      return updatedBoard;
    });
    changePlayer();
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => updateBox(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
