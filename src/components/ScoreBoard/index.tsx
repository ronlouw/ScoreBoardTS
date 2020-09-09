import React, { useState } from "react";
import Player from "../Player";
import { TPlayer } from "../../entities/Player";

export default function ScoreBoard() {
  const [players, setPlayers] = useState<TPlayer[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  return (
    <div>
      Scoreboard
      <div>
        {players.map((player) => (
          <Player
            key={player.id}
            // id={player.id}
            // name={player.name}
            // score={player.score}
            {...player}
          />
        ))}
      </div>
    </div>
  );
}
