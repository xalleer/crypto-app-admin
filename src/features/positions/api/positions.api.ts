import apiService from '@services/api.service.ts'
import type { GetPositionsResponse } from '../types/positions.types'

export const getPositions = async (): Promise<GetPositionsResponse> => {
  return apiService.get('/positions')
}
