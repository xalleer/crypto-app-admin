import type { CryptoSymbol, SignalDirection } from '@types'
export interface GetPositionsResponse {
  pending: Position[]
  count: number
  pending_count: number
  positions: Position[]
}

export interface Position {
  symbol: CryptoSymbol
  signal: SignalDirection
  entry_price: number
  sl: number
  tps: number[]
  original_qty: number
  order_id: string
  sl_order_id: string
  tp_order_ids: string[]
  open_time: string
  sl_state: number
  sw_tp_hit: number
  sw_closed_qty: number
}
