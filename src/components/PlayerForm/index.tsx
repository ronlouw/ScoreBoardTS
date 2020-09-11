import React, { useState } from "react";
import { addPlayer } from "../../store/matches/actions";
import { useDispatch } from "react-redux";

type TProps = {
  matchId: number;
};

export default function PlayerForm(props: TProps) {
  const initialState = "";
  const [name, setName] = useState(initialState);
  const dispatch = useDispatch();

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
            // const action = addPlayer(name, props.matchId);
            // dispatch(action);
            dispatch(addPlayer(name, props.matchId));
            setName("");
          }}
        >
          Add player
        </button>
      </p>
    </div>
  );
}
