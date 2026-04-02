export const SignalDirection = {
  LONG: 'BUY',
  SHORT: 'SHORT',
} as const
export type SignalDirection = (typeof SignalDirection)[keyof typeof SignalDirection]
