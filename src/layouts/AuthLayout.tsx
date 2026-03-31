import { Outlet } from 'react-router-dom'
import '../styles/layouts/_auth-layout.scss'
export default function AuthLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
