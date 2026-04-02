import { formatDateTime } from '@utils/formatDate.ts'
import type { Position } from '@features/positions'
import { SignalDirection } from '@/types'

export default function PositionCard({ position }: Position) {
  return (
    <div className="position-card">
      <div className="position-card__header">
        <span className="position-card__symbol">{position.symbol}</span>

        <span
          className={`position-card__signal ${
            position.signal === SignalDirection.LONG
              ? 'position-card__signal--long'
              : 'position-card__signal--short'
          }`}
        >
          {position.signal}
        </span>
      </div>

      <div className="position-card__row">
        <span className="position-card__label">Entry</span>
        <span className="position-card__value">{position.entry_price}</span>
      </div>

      <div className="position-card__row">
        <span className="position-card__label">TP</span>
        <span className="position-card__value position-card__value--success">
          {position.tps.join(' / ')}
        </span>
      </div>

      <div className="position-card__row">
        <span className="position-card__label">SL</span>
        <span className="position-card__value position-card__value--danger">{position.sl}</span>
      </div>

      <span className="position-card__date">{formatDateTime(position.open_time)}</span>
    </div>
  )
}
