import { Board, Player, Slot } from "@models/game";
import produce from "immer";

export default function placePieceAtCol(col: Slot, player: Player, board: Board): {success: boolean, newBoard: Board} {
    try {
        if (col !== null && (col >= 0) && (col < board[0].length)) {

            for (let i = board.length - 1; i >= 0; i--) {
                const slot = board[i][col];

                if (typeof board[i][col] !== "undefined" && slot === null) {
                    const newBoard = produce(board, (draft: { [x: string]: Player; }[]) => {
                        draft[i][col] = player;
                    })

                    return {success: true, newBoard: newBoard};
                }
            }

           
            return {success: false, newBoard: board};
        } else {
            console.log(col !== null ? col >= 0 : col)
            return {success: false, newBoard:board};
        }
    } catch (error) {
        console.log(error)
        return {success: false, newBoard:board};
    }
}