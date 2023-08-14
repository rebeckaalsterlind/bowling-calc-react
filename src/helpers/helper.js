import { v4 as uuid } from "uuid";

export function GetNumRounds(num, includeZero) {
  return Array.from({ length: num }, (_, i) => i + includeZero);
}

export function CreatePlayer(name = "Player one", hdcp = 0) {
  return {
    name: name,
    id: uuid(),
    isActive: true,
    hdcp: hdcp,
    rounds: CreatePlayerRounds(),
    hdcpTotals: 0,
    maxPossible: 0,
  };
}

export function CreatePlayerRounds() {
  const numRounds = GetNumRounds(11, 0);
  const rounds = [];
  for (let i = 1; i < numRounds.length; i++) {
    rounds.push({
      roundId: i,
      scores: {
        firstRoll: null,
        secondRoll: null,
        totals: null,
      },
      completed: false,
    });
  }
  return rounds;
}

export function GetActivePlayer(players, playerId) {
  const activePlayer = players.find((player) => player.id === playerId);
  return activePlayer || players[0];
}
export function GetActiveRound(activePlayer) {
  const activeRound = activePlayer.rounds.find((round) => !round.completed);
  return activeRound || activePlayer.rounds[0];
}

export function GetUpdatedScore(score, players, activePlayer, activeRound) {
  const updatedPlayers = players.map((player) => {
    if (player.id === activePlayer.id) {
      const updatedRounds = player.rounds.map((round) => {
        if (round.roundId === activeRound.roundId) {
          return {
            ...round,
            scores: {
              ...round.scores,
              firstRoll: score,
            },
          };
        }
        return round;
      });

      return {
        ...player,
        rounds: updatedRounds,
      };
    }
    return player;
  });
  return updatedPlayers;
}
