import {Card, Grid, Typography} from "@mui/joy";
import {formatCurrency} from "@utils/formatCurrency";
import '../../../styles/components/balance/_balance-info-card.scss'

interface BalanceInfoCardProps {
  balance: number
  title: string
  grid: {
    xs: number
    md: number
  }
  isPnl?: boolean
}

export default function BalanceInfoCard({ balance, title, grid, isPnl }: BalanceInfoCardProps) {
  const isNegative = balance < 0
  const isPositive = balance > 0

  const getClassColor = () => {
    if (!isPnl) return 'balance-info-card__value'

    if (isNegative) return 'balance-info-card__value balance-info-card__value--minus'
    if (isPositive) return 'balance-info-card__value balance-info-card__value--plus'

    return 'balance-info-card__value'
  }

  const getSign = () => {
    if (!isPnl) return ''
    if (isNegative) return '-'
    if (isPositive) return '+'
    return ''
  }

  return (
    <Grid xs={grid.xs} md={grid.md}>
      <Card>
        <Typography level="body-md">{title}</Typography>
        <Typography className={getClassColor()} level="h3">
          {getSign()}
          {formatCurrency(Math.abs(balance))}
        </Typography>
      </Card>
    </Grid>
  )
}
