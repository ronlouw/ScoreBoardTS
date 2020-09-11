import React from "react";
import { TPlayer } from "../../entities/Player";

interface Props extends TPlayer {
  matchId: number;
}

export default function Player(props: Props) {
  function handleClick() {
    // props.incrementScore(props.matchId, props.id);
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.score}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
