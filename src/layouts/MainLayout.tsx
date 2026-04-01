import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Box, IconButton, Drawer } from '@mui/joy'

export default function MainLayout() {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>

      <Box
        sx={{
          width: 250,
          p: 2,
          borderRight: '1px solid var(--border)',
          display: { xs: 'none', md: 'block' }
        }}
      >

      </Box>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          Sidebar
        </Box>
      </Drawer>

      <Box sx={{ flex: 1, p: 2 }}>

        <Box sx={{ display: { md: 'none' }, mb: 2 }}>
          <IconButton onClick={() => setOpen(true)}>

          </IconButton>
        </Box>

        <Outlet />
      </Box>
    </Box>
  )
}
