import React, { useState } from "react";
import Player from "../Player";
import { TPlayer, TSortingFunction } from "../../entities/Player";
import PlayerForm from "../PlayerForm";

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
  const [players, setPlayers] = useState<TPlayer[]>([]);

  const sortedPlayers = [...players].sort(sortingOptions[sortBy]);

  function incrementScore(playerId: number) {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });

    setPlayers(updatedPlayers);
  }

  function reset() {
    const updatedPlayers = players.map((player) => {
      return { ...player, score: 0 };
    });

    setPlayers(updatedPlayers);
  }

  function addPlayer(name: string) {
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    console.log("NEW:", newPlayer);
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
  }

  return (
    <div>
      Scoreboard
      <PlayerForm addPlayer={addPlayer} />
      <p>
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
        <button onClick={reset}>reset</button>
      </p>
      <div>
        {sortedPlayers.map((player) => (
          <Player key={player.id} {...player} incrementScore={incrementScore} />
        ))}
      </div>
    </div>
  );
}
