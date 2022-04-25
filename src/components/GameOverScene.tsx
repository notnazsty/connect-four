import React from 'react'

import { Button, Heading, VStack } from '@chakra-ui/react'

import useGameStore from '@stores/useGameState'
import { Player, Status, Winner } from '@models/game';
import otherPlayer from 'utils/otherPlayer';



const GameOverScene = () => {

    const currentPlayer = useGameStore(state => state.currentPlayer);
    const firstPlayer = useGameStore(state => state.firstPlayer);


    const setStatus = useGameStore(state => state.setStatus);
    const setCurrentPlayer = useGameStore(state => state.setCurrentPlayer);
    const setFirstPlayer = useGameStore(state => state.setFirstPlayer);

    const reset = useGameStore(state => state.reset);
    const winner = useGameStore(state => state.winner);

    const winnerMessage = (winner: Winner) => {
        switch (winner) {
            case Player.PlayerOne:
                return "Player 1 won!";
            case Player.PlayerTwo:
                return "Player 2 won!";
            case "tie":
                return "Tie!";
            default:
                return "Tie!";
        }
    }

    const rematch = () => {
        const newFirstPlayer = otherPlayer(firstPlayer);

        reset();

        setFirstPlayer(newFirstPlayer);
        setCurrentPlayer(newFirstPlayer);
        setStatus(Status.InProgress);
    }

    return (
        <VStack w="100%" h={"100%"} justify="center" pos="absolute" bg="whiteAlpha.600">
            <Heading>{winnerMessage(winner)}</Heading>
            <Button onClick={rematch}>Rematch</Button>
        </VStack>
    )
}

export default GameOverScene
