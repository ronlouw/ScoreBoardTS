import React, { useState } from "react";
import Player from "../Player";
import { TSortingFunction } from "../../entities/Player";
import PlayerForm from "../PlayerForm";
import { selectPlayersByMatchId } from "../../store/matches/selectors";
import { useSelector } from "react-redux";

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

type TProps = {
  matchId: number;
};

export default function ScoreBoard(props: TProps) {
  const [sortBy, setSortBy] = useState("scoreDesc");
  // const [players, setPlayers] = useState<TPlayer[]>([]);
  const players = useSelector(selectPlayersByMatchId(props.matchId));

  const sortedPlayers = [...players].sort(sortingOptions[sortBy]);

  return (
    <div>
      Scoreboard
      <PlayerForm />
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
          <Player matchId={props.matchId} key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
}
