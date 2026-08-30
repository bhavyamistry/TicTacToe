import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [isEdit, setisEdit] = useState(false);
  const [editplayername, seteditPlayername] = useState(name);
  function editFunc() {
    setisEdit((editing) => !editing);
  }

  function handleChange(event) {
    seteditPlayername(event.target.value);
  }

  let playerName = <span className="player-name">{editplayername}</span>;
  if (isEdit) {
    playerName = (
      <input
        type="text"
        value={editplayername}
        onChange={handleChange}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : "undefined"}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editFunc}>{!isEdit ? "Edit" : "Save"}</button>
    </li>
  );
}
