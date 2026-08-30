import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
  function changePlayerTurn() {
    setPlayerTurn((previousState) => {
      return previousState === "X" ? "O" : "X";
    });
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={playerTurn === "X"} />
        <Player name="Player 2" symbol="O" isActive={playerTurn === "O"} />
      </ol>
      <GameBoard currPlayer={playerTurn} changePlayer={changePlayerTurn} />
    </div>
  );
}

export default App;
