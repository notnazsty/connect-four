import create, { GetState, SetState, StateCreator, StoreApi } from 'zustand';
import {devtools} from 'zustand/middleware'
import produce from 'immer';

import { initialBoard, initialGameState } from '@models/defaults';
import { GameStateStore } from '@models/stores';
import { Board, Player } from '@models/game';
import otherPlayer from 'utils/otherPlayer';

const useGameStore = create<GameStateStore>()(devtools((set) => ({
    ...initialGameState,
    setWinner: (winner) => set({winner: winner}),
    incrementTurn: () => set(state => ({turn: state.turn + 1})),
    setCurrentPlayer: (player) => set({ currentPlayer: player }),
    toggleCurrentPlayer: () => set(state => ({ currentPlayer: otherPlayer(state.currentPlayer) })),
    setStatus: (status) => set({gameStatus: status}),
    setSelectedColumn: (col) => set({selectedColumn: col}),
    setBoard: (board: Board) => set({board}),
    clearBoard: () => set({board: initialBoard}),
    reset: () => set(initialGameState),
    setFirstPlayer: (player) => set({firstPlayer: player}),
})))

export default  useGameStore;