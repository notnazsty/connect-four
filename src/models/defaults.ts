import { Game, Player, Status } from "./game";

export const initialBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
];

export const initialGameState: Game = {
    firstPlayer: 1,
    currentPlayer: Player.PlayerOne,
    gameStatus: Status.NotStarted,
    board: initialBoard,
    selectedColumn: null,
    turn: 1,
    winner: null, 
}