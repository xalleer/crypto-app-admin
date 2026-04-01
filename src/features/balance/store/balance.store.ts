import { create } from 'zustand'
import { getBalance } from '@features/balance'

interface BalanceState {
  availableBalance: number
  dailyPnl: number
  totalBalance: number
  totalPnl: number
  unrealizedPnl: number
  isLoading: boolean
  error: string | null
  getBalance: () => Promise<void>
}

export const useBalanceStore = create<BalanceState>()((set) => ({
  availableBalance: 0,
  dailyPnl: 0,
  totalBalance: 0,
  totalPnl: 0,
  unrealizedPnl: 0,
  isLoading: false,
  error: null,
  getBalance: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await getBalance()
      set({
        availableBalance: response.available_balance,
        dailyPnl: response.daily_pnl,
        totalBalance: response.total_balance,
        totalPnl: response.total_pnl,
        unrealizedPnl: response.unrealized_pnl,
        isLoading: false,
      })
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch balance',
      })
    }
  },
}))
