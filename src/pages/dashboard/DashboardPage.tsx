import { getMe } from '@features/auth/api/auth.api.ts'
import { useEffect } from 'react'
import { useAuthStore } from '@features/auth'

export default function DashboardPage() {
  const { user, setUser } = useAuthStore()

  useEffect(() => {
    if (user) return
    void getMe().then(setUser)
  }, [user, setUser])

  return <div>Dashboard</div>
}
