export interface IPlayer {
  name: string;
  id: string;
  isActive: boolean;
  hdcp: number;
  rounds: IRound[];
  hdcpTotals: number;
  maxPossible: number;
}

export interface IRound {
  roundId: number;
  scores: IScore;
  completed: boolean;
}

export interface IScore {
  firstRoll: number;
  secondRoll: number;
  total: number;
}
