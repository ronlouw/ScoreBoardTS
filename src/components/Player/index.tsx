import React from "react";
import { TPlayer } from "../../entities/Player";

interface Props extends TPlayer {}

export default function Player(props: Props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.score}</p>
    </div>
  );
}
