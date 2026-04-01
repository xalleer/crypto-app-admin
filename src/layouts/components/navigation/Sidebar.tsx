import { Avatar, Box, List, Typography } from '@mui/joy'
import CustomButton from '@components/ui/CustomButton.tsx'
import { useAuthStore, UserRole } from '@features/auth'
import { normalizeRole } from '@utils/normalizeRole.ts'
import { navItems } from '@layouts/components/navigation/navConfig.ts'
import NavItem from '@layouts/components/navigation/NavItem.tsx'
import {useLogout} from "@features/auth/hooks/useLogout.ts";

export default function Sidebar() {
  const { user } = useAuthStore()
  const logout = useLogout()

  const getTextAvatar = () => {
    if (!user) return ''
    return user.username.slice(0, 2).toUpperCase()
  }

  const getUserRole = () => {
    if (!user) return UserRole.VIEWER
    return normalizeRole(user.role)
  }

  return (
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
          {navItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </List>
      </Box>

      <Box sx={{ mb: 2, width: '100%' }}>
        <CustomButton
          onClick={logout}
          variant="outlined"
          sx={{ width: '100%' }}
          text={'Вийти'}
        />
      </Box>
    </Box>
  )
}
