import { useState } from "react";
export default function GameBoard({ changePlayer, board }) {
  // const [gameboard, setGameBoard] = useState(initialGameBoard);

  // function updateBox(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     console.log(currPlayer);
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = currPlayer;
  //     return updatedBoard;
  //   });
  //   changePlayer();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => changePlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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
