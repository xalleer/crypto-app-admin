import { Box, List, Typography } from '@mui/joy'
import { useEffect } from 'react'
import { usePositionsStore } from '@features/positions'
import LoadingState from '@components/LoadingState.tsx'
import ErrorFallback from '@components/ErrorFallback.tsx'
import PositionCard from '@features/positions/components/PositionCard.tsx'

export default function PositionsPage() {
  const { positions, isLoading, error, getPositions } = usePositionsStore()

  useEffect(() => {
    getPositions()
  }, [])

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorFallback error={error} />
  }

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <Typography level="h4">Активні позиції</Typography>
      </Box>

      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
        }}
      >
        {positions.map((position) => (
          <PositionCard key={position.order_id} position={position} />
        ))}
      </List>
    </div>
  )
}
