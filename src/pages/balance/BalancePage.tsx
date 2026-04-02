import { useEffect } from 'react'
import { useBalanceStore } from '@features/balance'
import { Box, Grid, Typography } from '@mui/joy'
import BalanceInfoCard from '@features/balance/components/BalanceInfoCard.tsx'
import ErrorFallback from '@components/ErrorFallback.tsx'
import LoadingState from '@components/LoadingState.tsx'

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
    { balance: totalPnl, title: 'Загальний PnL', grid: { xs: 12, md: 6 }, isPnl: true },
    { balance: dailyPnl, title: 'Денний PnL', grid: { xs: 12, md: 6 }, isPnl: true },
    { balance: unrealizedPnl, title: 'Нереалізований PnL', grid: { xs: 12, md: 6 }, isPnl: true },
  ]

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography level="h4">Інформація про баланс</Typography>
      </Box>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {balanceCards.map((card) => (
          <BalanceInfoCard key={card.title} {...card} />
        ))}
      </Grid>
    </div>
  )
}
