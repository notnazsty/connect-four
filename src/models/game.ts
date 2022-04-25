export enum Player {
    "PlayerOne" = 1,
    "PlayerTwo" = 2,
}

export type Slot = Player | null;
export type Board = Slot[][];

export type Winner = Player | "tie" | null;

export enum Status {
    GameOver = "GAME_OVER",
    InProgress = "IN_PROGRESS",
    NotStarted = "NOT_STARTED",
}

export interface Game {
    firstPlayer: Player;
    currentPlayer: Player,
    board: Board,
    selectedColumn: number | null,
    gameStatus: Status,
    turn: number,
    winner: Winner,
}