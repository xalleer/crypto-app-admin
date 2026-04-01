import {Outlet, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {
  Box,
  IconButton,
  Drawer,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from '@mui/joy'
import { useAuthStore, UserRole } from '@features/auth'
import { normalizeRole } from '@utils/normalizeRole.ts'
import {
  HomeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import CustomButton from '@components/ui/CustomButton.tsx'

export default function MainLayout() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { user, clearToken } = useAuthStore()

  const menuIconSx = { width: 18, height: 18 }

  const getTextAvatar = () => {
    if (!user) return ''
    return (user.username[0] + user.username[1]).toUpperCase()
  }

  const getUserRole = () => {
    if (!user) return UserRole.VIEWER
    return normalizeRole(user.role)
  }

  const handleLogout = async () => {
    await useAuthStore.persist.clearStorage()
    clearToken()
    navigate('/sign-in', { replace: true })
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 250,
          p: 2,
          borderRight: '1px solid var(--border)',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, position: 'relative' }}>
            <Avatar> {getTextAvatar()} </Avatar>
            <Box>
              <Typography level="body-sm"> @{user?.username} </Typography>
              <Typography level="body-xs"> {getUserRole()} </Typography>
            </Box>
          </Box>

          <List sx={{ mt: 2 }}>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <HomeIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Головна </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <CurrencyDollarIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Баланс </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <ClockIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Історія </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <ChartBarIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Позиції </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <ChatBubbleLeftRightIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Чат </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
                  <ArrowTrendingUpIcon style={menuIconSx} />
                </ListItemDecorator>
                <Typography level="body-sm"> Статистика </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 2, width: '100%' }}>
          <CustomButton onClick={handleLogout} variant="outlined" sx={{ width: '100%' }} text={'Вийти'} />
        </Box>
      </Box>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>Sidebar</Box>
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
