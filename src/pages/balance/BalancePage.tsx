import { useEffect } from 'react'
import { useBalanceStore } from '@features/balance'
import { Grid} from '@mui/joy'
import BalanceInfoCard from "@features/balance/components/BalanceInfoCard.tsx";
import ErrorFallback from "@components/ErrorFallback.tsx";
import LoadingState from "@components/LoadingState.tsx";

export default function BalancePage() {
  const {
    getBalance,
    availableBalance,
    dailyPnl,
    totalBalance,
    totalPnl,
    unrealizedPnl,
    isLoading,
    error,
  } = useBalanceStore()

  useEffect(() => {
    getBalance()
  }, [getBalance])

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorFallback textError={error} onClick={() => getBalance()} />
  }

  const balanceCards = [
    { balance: availableBalance, title: 'Доступний баланс', grid: { xs: 12, md: 6 } },
    { balance: totalBalance, title: 'Загальний баланс', grid: { xs: 12, md: 6 } },
  ]

  const pnlCards = [
    { balance: totalPnl, title: 'Загальний PnL', grid: { xs: 6, md: 4 } },
    { balance: dailyPnl, title: 'Денний PnL', grid: { xs: 6, md: 4 } },
    { balance: unrealizedPnl, title: 'Нереалізований PnL', grid: { xs: 6, md: 4 } },
  ]

  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {balanceCards.map((card) => (
          <BalanceInfoCard key={card.title} {...card} />
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {pnlCards.map((card) => (
          <BalanceInfoCard key={card.title} isPnl {...card} />
        ))}
      </Grid>
    </div>
  )
}
