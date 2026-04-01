import apiService from '@services/api.service.ts'
import type { BalanceResponse } from '@features/balance'

export const getBalance = (): Promise<BalanceResponse> => {
  return apiService.get('/balance')
}
