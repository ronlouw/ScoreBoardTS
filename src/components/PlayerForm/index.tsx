import React, { useState } from "react";

type TProps = {};

export default function PlayerForm(props: TProps) {
  const initialState = "";
  const [name, setName] = useState(initialState);

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
