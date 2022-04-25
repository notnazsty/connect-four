import { Button, Heading, VStack } from '@chakra-ui/react'
import Game from '@components/Game'
import { Status } from '@models/game';
import useGameStore from '@stores/useGameState';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <VStack minH="100vh" bg="gray.100">
      <Game />
    </VStack>
  )
}

export default Home
