import React, { useState } from "react";
import Player from "../Player";
import { TPlayer, TSortingFunction } from "../../entities/Player";
import { TMatch } from "../../entities/Match";
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

interface IProps extends TMatch {
  incrementScore: (matchId: number, playerId: number) => void;
}

export default function ScoreBoard(props: IProps) {
  const [sortBy, setSortBy] = useState("scoreDesc");
  // const [players, setPlayers] = useState<TPlayer[]>([]);

  const sortedPlayers = [...props.players].sort(sortingOptions[sortBy]);

  return (
    <div>
      Scoreboard
      {/* <PlayerForm addPlayer={addPlayer} /> */}
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
        {/* <button onClick={reset}>reset</button> */}
      </p>
      <div>
        {sortedPlayers.map((player) => (
          <Player
            matchId={props.id}
            key={player.id}
            {...player}
            incrementScore={props.incrementScore}
          />
        ))}
      </div>
    </div>
  );
}
