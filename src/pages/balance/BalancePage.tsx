import { useEffect } from 'react'
import { useBalanceStore } from '@features/balance'
import { Grid} from '@mui/joy'
import BalanceInfoCard from "@features/balance/components/BalanceInfoCard.tsx";

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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <BalanceInfoCard balance={availableBalance} title="Доступний баланс" grid={{xs: 12, md: 6}} />
        <BalanceInfoCard balance={totalBalance} title="Загальний баланс" grid={{xs: 12, md: 6}} />
      </Grid>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <BalanceInfoCard isPnl={true} balance={totalPnl} title="Загальний PnL" grid={{xs: 6, md: 4}} />
        <BalanceInfoCard isPnl={true} balance={dailyPnl} title="Денний PnL" grid={{xs: 6, md: 4}} />
        <BalanceInfoCard isPnl={true} balance={unrealizedPnl} title="Нереалізований PnL" grid={{xs: 6, md: 4}} />
      </Grid>

    </div>
  )
}
