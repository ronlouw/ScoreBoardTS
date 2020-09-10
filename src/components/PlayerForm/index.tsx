import React, { useState } from "react";

type TProps = {
  addPlayer: (name: string) => void;
};

export default function PlayerForm(props: TProps) {
  const initialState = localStorage.getItem("name") || "";
  const [name, setName] = useState(initialState);

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            localStorage.setItem("name", event.target.value);
            setName(event.target.value);
          }}
          value={name}
        />{" "}
        <button
          onClick={() => {
            console.log("ADD PLAYER", name);
            props.addPlayer(name);
            setName("");
            localStorage.setItem("name", "");
          }}
        >
          Add player
        </button>
      </p>
    </div>
  );
}
