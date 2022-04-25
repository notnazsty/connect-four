import { Board, Player } from "@models/game";

export default function checkIfWinner(board: Board, player: Player): boolean {

    try {
        const rows = board.length;
        const cols = board[0].length;

        // horizontal
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols - 3; col++) {
                if (board[row][col] == player && board[row][col + 1] == player && board[row][col + 2] == player && board[row][col + 3] == player) {
                    return true;
                }
            }
        }

        // // vertical
        for (let row = 0; row < rows - 3; row++) {
            for (let col = 0; col < cols; col++) {
                if (board[row][col] == player && board[row + 1][col] == player && board[row + 2][col] == player && board[row + 3][col] == player) {
                    return true;
                }
            }
        }

        // top left to bottom right diagonal 
        for (let row = 0; row < rows - 3; row++) {
            for (let col = 0; col < cols - 3; col++) {
                if (board[row][col] == player && board[row + 1][col+ 1] == player && board[row + 2][col+ 2] == player && board[row + 3][col + 3] == player) {
                    return true;
                }
            }
        }

       // top left to bottom right diagonal 
       for (let row = 0; row < rows - 3; row++) {
        for (let col = 3; col < cols; col++) {
            if (board[row][col] == player && board[row + 1][col - 1] == player && board[row + 2][col - 2] == player && board[row + 3][col - 3] == player) {
                return true;
            }
        }
    }

        // console.log("gmm")

        return false;
    } catch (error) {
        console.log(error)
        return false;
    }

}
