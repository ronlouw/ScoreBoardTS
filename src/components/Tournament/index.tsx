import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import { TTournament } from "../../entities/Tournament";
import { TPlayer } from "../../entities/Player";
import { selectMatchIds } from "../../store/matches/selectors";
import { createMatch } from "../../store/matches/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Tournament() {
  const [matches, setMatches] = useState<TTournament>([]);
  const matchIds = useSelector(selectMatchIds);
  const dispatch = useDispatch();

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

  function newMatch() {
    dispatch(createMatch());
  }

  return (
    <div>
      <button onClick={newMatch}>New Match</button>
      <button onClick={merge}>MERGE MATCHES</button>
      {matchIds.map((matchId) => {
        return <ScoreBoard key={matchId} matchId={matchId} />;
      })}
    </div>
  );
}
