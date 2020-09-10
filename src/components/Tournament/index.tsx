import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import { TTournament } from "../../entities/Tournament";

export default function Tournament() {
  const [matches, setMatches] = useState<TTournament>([
    {
      id: 1,
      players: [{ id: 1, name: "Kelley", score: 0 }],
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

  function incrementScore(matchId: number, playerId: number) {
    const updatedMatches = matches.map((match) => {
      if (match.id === matchId) {
        const updatedPlayers = match.players.map((player) => {
          if (player.id === playerId) {
            return { ...player, score: player.score + 1 };
          } else {
            return player;
          }
        });

        return { ...match, players: updatedPlayers };
      } else {
        return match;
      }
    });

    setMatches(updatedMatches);
  }

  // function reset() {
  //   const updatedPlayers = players.map((player) => {
  //     return { ...player, score: 0 };
  //   });

  //   setPlayers(updatedPlayers);
  // }

  // function addPlayer(name: string) {
  //   const newPlayer = { id: players.length + 1, name: name, score: 0 };
  //   console.log("NEW:", newPlayer);
  //   const updatedPlayers = [...players, newPlayer];
  //   setPlayers(updatedPlayers);
  // }

  return (
    <div>
      {matches.map((match) => {
        return (
          <ScoreBoard
            key={match.id}
            id={match.id}
            players={match.players}
            incrementScore={incrementScore}
          />
        );
      })}
    </div>
  );
}
