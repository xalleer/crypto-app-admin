import { create } from 'zustand'
import { getPositions as getPositionsApi } from '../api/positions.api'
import type { Position } from '../types/positions.types'

interface PositionsStore {
  pending: Position[]
  pending_count: number
  positions: Position[]
  positions_count: number
  isLoading: boolean
  error: string | null
  getPositions: () => Promise<void>
}

export const usePositionsStore = create<PositionsStore>()((set) => ({
  pending: [],
  pending_count: 0,
  positions: [],
  positions_count: 0,
  isLoading: false,
  error: null,
  getPositions: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await getPositionsApi()
      set({
        pending: response.pending,
        pending_count: response.pending_count,
        positions: response.positions,
        positions_count: response.pending_count,
        isLoading: false,
      })
    } catch (e) {
      set({
        isLoading: false,
        error: e instanceof Error ? e.message : 'Failed to fetch positions',
      })
    }
  },
}))
