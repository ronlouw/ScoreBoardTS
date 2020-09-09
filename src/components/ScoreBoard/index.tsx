import React, { useState } from "react";
import Player from "../Player";
import { TPlayer, TSortingFunction } from "../../entities/Player";

const compareScoreDesc: TSortingFunction = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

const compareScoreAsc: TSortingFunction = (playerA, playerB) => {
  return playerA.score - playerB.score;
};

const compareNameAsc: TSortingFunction = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

const compareNameDesc: TSortingFunction = (playerA, playerB) => {
  return playerB.name.localeCompare(playerA.name);
};

type TSortingOptions = {
  [key: string]: TSortingFunction;
};

const sortingOptions: TSortingOptions = {
  nameDesc: compareNameDesc,
  nameAsc: compareNameAsc,
  scoreAsc: compareScoreAsc,
  scoreDesc: compareScoreDesc,
};

export default function ScoreBoard() {
  const [sortBy, setSortBy] = useState("scoreDesc");
  const [players, setPlayers] = useState<TPlayer[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const sortedPlayers = [...players].sort(sortingOptions[sortBy]);

  function incrementScore(playerId: number) {
    console.log("Geef een punt aan deze speler:", playerId);
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: player.score + 1 };
        // return {
        //   id: player.id,
        //   name: player.name,
        //   score: player.score + 1,
        // };
      } else {
        return player;
      }
    });

    console.log(updatedPlayers);
    setPlayers(updatedPlayers);
  }

  return (
    <div>
      Scoreboard
      <select
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option value="nameAsc">Sort by name ASC</option>
        <option value="nameDesc">Sort by name DESC</option>
        <option value="scoreAsc">Sort by score ASC</option>
        <option value="scoreDesc">Sort by score DESC</option>
      </select>
      <div>
        {sortedPlayers.map((player) => (
          <Player key={player.id} {...player} incrementScore={incrementScore} />
        ))}
      </div>
    </div>
  );
}
