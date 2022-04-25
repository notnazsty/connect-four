import React, { useMemo } from 'react'

import { Box, Center } from '@chakra-ui/react'
import { Player, Slot } from '@models/game'
import useGameStore from '@stores/useGameState'

interface Props {
    col: number,
}

const SelectorSlot: React.FC<Props> = ({ col }) => {

    const selectedColumn = useGameStore(state => state.selectedColumn);

    const setSelectedColumn = useGameStore(state => state.setSelectedColumn);

    const currentPlayer = useGameStore(state => state.currentPlayer);

    const {slotBg, slotBorder}: {slotBg: string, slotBorder: string} = useMemo(() => {
        switch (currentPlayer) {
            case Player.PlayerOne:
                return {slotBg: "red.500", slotBorder: "red.600"};
            case Player.PlayerTwo:
                return {slotBg: "yellow.400", slotBorder: "yellow.500"};
            default:
                return {slotBg: "blue.400", slotBorder: "transparent"}
        }
    }, [currentPlayer])

    return (
        <Center onMouseOver={(e) => {if (selectedColumn !== col) setSelectedColumn(col)}} padding={2}>
            {selectedColumn == col && <Box rounded={"full"} bg={slotBg} p={8} borderColor={slotBorder} borderWidth="medium" />}
        </Center>
    )
}

export default SelectorSlot