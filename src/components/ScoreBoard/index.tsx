import React, { useState } from "react";
import Player from "../Player";
import { TPlayer, TSortingFunction } from "../../entities/Player";

const compareScoreAsc: TSortingFunction = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

const compareScoreDesc: TSortingFunction = (playerA, playerB) => {
  return playerA.score - playerB.score;
};

const compareNameDesc: TSortingFunction = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

const compareNameAsc: TSortingFunction = (playerA, playerB) => {
  return playerB.name.localeCompare(playerA.name);
};

const sortingOptions: {
  [key: string]: TSortingFunction;
} = {
  name: compareNameDesc,
  nameAsc: compareNameAsc,
  scoreAsc: compareScoreAsc,
  scoreDesc: compareScoreDesc,
};

export default function ScoreBoard() {
  const [sortBy, setSortBy] = useState("score");
  const [players, setPlayers] = useState<TPlayer[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const sortedPlayers = [...players].sort(sortingOptions[sortBy]);

  return (
    <div>
      Scoreboard
      <select
        onChange={(event) => {
          //   console.log(event.target); // select
          //   console.log(event.target.value); // name of score
          setSortBy(event.target.value);
        }}
      >
        <option value="name">Sort by name DESC</option>
        <option value="scoreAsc">Sort by score ASC</option>
        <option value="scoreDesc">Sort by score DESC</option>
        <option value="nameAsc">Sort by name ASC</option>
      </select>
      <div>
        {sortedPlayers.map((player) => (
          <Player key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
}
