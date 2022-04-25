import React from 'react'

import { Button, Heading, VStack } from '@chakra-ui/react'

import useGameStore from '@stores/useGameState'
import { Status } from '@models/game';

const StartScreen = () => {

    const setStatus = useGameStore(state => state.setStatus);

    return (
        <VStack w="100%" h={"100%"} justify="center" pos="absolute" bg="whiteAlpha.600">
            <Heading>Connect 4</Heading>
            <Button onClick={() => setStatus(Status.InProgress)}>Start</Button>
        </VStack>
    )
}

export default StartScreen
