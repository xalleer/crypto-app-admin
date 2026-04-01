import { navItems } from '@layouts/components/navigation/navConfig.ts'
import NavItem from '@layouts/components/navigation/NavItem.tsx'
import { List } from '@mui/joy'

export default function MobileSidebar() {
  return (
    <List sx={{ mt: 2 }}>
      {navItems.map((item) => (
        <NavItem key={item.path} {...item} />
      ))}
    </List>
  )
}
