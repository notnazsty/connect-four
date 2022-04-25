import { Board, Game, Player, Status, Winner } from "./game";

export interface GameStateStore extends Game {
    setWinner: (winner: Winner) => void;
    incrementTurn: () => void;
    setCurrentPlayer: (player: Player) => void;
    toggleCurrentPlayer: () => void;
    setStatus: (status: Status) => void;
    setSelectedColumn: (col: number | null) => void;
    setBoard: (board: Board) => void;
    clearBoard: () => void;
    setFirstPlayer: (player: Player) => void;
    reset: () => void;
}