import React, { useState } from "react";

type TProps = {
  addPlayer: (name: string) => void;
};

export default function PlayerForm(props: TProps) {
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
            props.addPlayer(name);
            setName("");
          }}
        >
          Add player
        </button>
      </p>
    </div>
  );
}
