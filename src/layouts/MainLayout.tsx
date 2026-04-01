import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Box, IconButton, Drawer } from '@mui/joy'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Sidebar from '@layouts/components/navigation/Sidebar.tsx'
import MobileSidebar from '@layouts/components/navigation/MobileSidebar.tsx'
import CustomButton from '@components/ui/CustomButton.tsx'
import { useLogout } from '@features/auth/hooks/useLogout.ts'

export default function MainLayout() {
  const [open, setOpen] = useState(false)
  const menuIconSx = { width: 18, height: 18 }
  const logout = useLogout()

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box sx={{ width: 250, p: 2 }}>
            <MobileSidebar />
          </Box>

          <Box sx={{ mb: 2, p: 2 }}>
            <CustomButton
              onClick={logout}
              variant="outlined"
              sx={{ width: '100%' }}
              text={'Вийти'}
            />
          </Box>
        </Box>
      </Drawer>

      <Box sx={{ flex: 1, p: 2 }}>
        <Box sx={{ display: { md: 'none' }, mb: 2 }}>
          <IconButton onClick={() => setOpen(true)}>
            <Bars3Icon style={menuIconSx} />
          </IconButton>
        </Box>

        <Outlet />
      </Box>
    </Box>
  )
}
