import React, { useState } from "react";

export default function PlayerForm() {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />{" "}
        <button
          onClick={() => {
            console.log("ADD PLAYER", name);
            setName("");
          }}
        >
          Add player
        </button>
      </p>
    </div>
  );
}
