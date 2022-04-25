import { Player } from "@models/game";

export default function (player: Player) {
    switch (player) {
        case Player.PlayerOne:
            return Player.PlayerTwo;
        case Player.PlayerTwo:
            return Player.PlayerOne;
        default:
            const _exhaustiveCheck: never = player;
            return _exhaustiveCheck;
    }
}