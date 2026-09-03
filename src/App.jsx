import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function checkWinner(winner, gameboard, playerName) {
  for (const block of WINNING_COMBINATIONS) {
    const firstSymbol = gameboard[block[0].row][block[0].column];
    const secondSymbol = gameboard[block[1].row][block[1].column];
    const thirdSymbol = gameboard[block[2].row][block[2].column];
    // console.log(firstSymbol, secondSymbol, thirdSymbol);
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
      console.log("Winner:" + winner);
    }
    // console.log(winner);
  }
  if (winner) {
    winner = playerName[winner];
  }
  return winner;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [playerName, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  console.log(playerName);
  let gameboard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  let winner;
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  winner = checkWinner(winner, gameboard, playerName);
  const finish = (gameTurn.length === 9 && !winner) || winner;

  function changePlayerTurn(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      let updatedTurns = [];

      updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: deriveActivePlayer(prevTurn),
        },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }

  function resetGame() {
    setGameTurn([]);
    // console.log(gameTurn);
  }

  function changPlayerName(symbol, pName) {
    setPlayerNames((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [symbol]: pName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={deriveActivePlayer(gameTurn) === "X"}
            setPlayerName={changPlayerName}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={deriveActivePlayer(gameTurn) === "O"}
            setPlayerName={changPlayerName}
          />
        </ol>
        {finish && <GameOver winner={winner} reset={resetGame} />}
        <GameBoard board={gameboard} changePlayer={changePlayerTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
