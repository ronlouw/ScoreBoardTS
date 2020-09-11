import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import { TTournament } from "../../entities/Tournament";
import { TPlayer } from "../../entities/Player";

export default function Tournament() {
  const [matches, setMatches] = useState<TTournament>([]);

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

  function merge() {
    const accumulator: TPlayer[] = [];
    const allPlayers = matches.reduce((allPlayers, match) => {
      if (match.players.length === 0) {
        return allPlayers;
      }
      return [...allPlayers, ...match.players];
    }, accumulator);

    const mergedMatches: TTournament = [{ id: 1, players: allPlayers }];

    setMatches(mergedMatches);
  }

  return (
    <div>
      <button onClick={merge}>MERGE MATCHES</button>
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
