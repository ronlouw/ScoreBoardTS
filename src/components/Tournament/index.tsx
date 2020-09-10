import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import { TTournament } from "../../entities/Tournament";

export default function Tournament() {
  const [matches, setMatches] = useState<TTournament>([
    {
      id: 1,
      players: [],
    },
    {
      id: 2,
      players: [],
    },
    {
      id: 3,
      players: [],
    },
  ]);
  return (
    <div>
      {matches.map((match) => {
        return (
          <ScoreBoard key={match.id} id={match.id} players={match.players} />
        );
      })}
    </div>
  );
}
