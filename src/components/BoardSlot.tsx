import React, { useMemo } from 'react'

import { Box, Center } from '@chakra-ui/react'
import { Player, Slot } from '@models/game'
import useGameStore from '@stores/useGameState'

interface Props {
    row: number,
    col: number,
    player: Slot,
}

const BoardSlot: React.FC<Props> = ({ row, col, player }) => {

    const setSelectedColumn = useGameStore(state => state.setSelectedColumn);

    const {slotBg, slotBorder, slotTextColor}: {slotBg: string, slotBorder: string, slotTextColor: string} = useMemo(() => {
        switch (player) {
            case Player.PlayerOne:
                return {slotBg: "red.500", slotBorder: "red.400", slotTextColor: "red.700"};
            case Player.PlayerTwo:
                return {slotBg: "yellow.400", slotBorder: "yellow.300", slotTextColor: "yellow.600"};
            default:
                return {slotBg: "blue.600", slotBorder: "transparent", slotTextColor: "transparent"}
        }
    }, [player])

    return (
        <Center onMouseOver={(e) => setSelectedColumn(col)} padding={3} bg={"blue.500"} border="1px" borderColor={"blue.400"}>
            <Center fontWeight="bold" color={slotTextColor} rounded={"full"} bg={slotBg} boxSize="64px" borderColor={slotBorder} borderWidth="medium">
                
            </Center>
        </Center>
    )
}

export default BoardSlot