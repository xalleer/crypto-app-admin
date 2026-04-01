import { ListItem, ListItemButton, ListItemDecorator, Typography } from '@mui/joy'
import { useLocation, useNavigate } from 'react-router-dom'
import type { NavItem } from '@layouts/components/navigation/navConfig.ts'

export default function NavItem(props: NavItem) {
  const menuIconSx = { width: 18, height: 18 }
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === props.path

  return (
    <ListItem>
      <ListItemButton selected={isActive} onClick={() => navigate(props.path)}>
        <ListItemDecorator sx={{ minWidth: 32, display: 'flex', alignItems: 'center' }}>
          <props.icon style={menuIconSx} />
        </ListItemDecorator>
        <Typography level="body-sm">{props.label}</Typography>
      </ListItemButton>
    </ListItem>
  )
}
