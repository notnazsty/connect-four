import React, { useCallback, useEffect, useMemo } from 'react'

import { Box, Button, Center, Grid, GridItem, Heading, VStack } from '@chakra-ui/react'

import useGameStore from '@stores/useGameState'
import { Slot, Status } from '@models/game';
import flatten2DArray from 'utils/flatten2DArray';
import BoardSlot from './BoardSlot';
import SelectorSlot from './SelectorSlot';
import placePieceAtCol from 'utils/placePieceAtCol';
import otherPlayer from 'utils/otherPlayer';
import checkIfWinner from 'utils/checkIfWinner';
import StartScreen from './StartScreen';
import GameOverScene from './GameOverScene';


const Game = () => {

  const board = useGameStore(state => state.board);
  const setBoard = useGameStore(state => state.setBoard);
  const turn = useGameStore(state => state.turn);
  const incrementTurn = useGameStore(state => state.incrementTurn);
  const selectedColumn = useGameStore(state => state.selectedColumn);
  const currentPlayer = useGameStore(state => state.currentPlayer);
  const setCurrentPlayer = useGameStore(state => state.setCurrentPlayer);
  const setStatus = useGameStore(state => state.setStatus);
  const gameStatus = useGameStore(state => state.gameStatus);

  const setWinner = useGameStore(state => state.setWinner);



  const flattenedBoard: Slot[] = useMemo(() => flatten2DArray(board), [board])

  const handleClick = () => {
    if (gameStatus === Status.InProgress) {
      const { success, newBoard } = placePieceAtCol(selectedColumn, currentPlayer, board);

      if (success) {
        setBoard(newBoard);

        if (checkIfWinner(newBoard, currentPlayer)) {
          setWinner(currentPlayer)
          setStatus(Status.GameOver)
        } else if (turn > 42) {
          setStatus(Status.GameOver)
          console.log("Tie")
        } else {
          incrementTurn();
          setCurrentPlayer(otherPlayer(currentPlayer));
        }
      }
    }
  }

  return (
    <VStack onClick={handleClick}>
      <Grid templateColumns={"repeat(7, 1fr)"} templateRows={"repeat(6, 1fr)"} gridGap={0}>

        {gameStatus === Status.InProgress && board[0].map((val, i) => <SelectorSlot key={i} col={i} />)}
        {gameStatus !== Status.InProgress && board[0].map((val, i) => <Box key={i} />)}

        <GridItem colSpan={7} rowSpan={6} pos="relative">

          {gameStatus === Status.NotStarted && <StartScreen />}
          {gameStatus === Status.GameOver && <GameOverScene />}

          <Grid templateColumns={"repeat(7, 1fr)"} templateRows={"repeat(6, 1fr)"}>

            {flattenedBoard.map((val, i) => (
              <BoardSlot key={i} row={Math.floor(i / (board.length + 1))} col={(i % board[0].length) || 0} player={val} />
            ))}

          </Grid>
        </GridItem>

      </Grid>
    </VStack>

  )
}

export default Game
