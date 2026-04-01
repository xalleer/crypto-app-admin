import { getMe } from '@features/auth/api/auth.api.ts'
import { useEffect } from 'react'
import { useAuthStore } from '@features/auth'

export default function DashboardPage() {
  const setUser = useAuthStore((s) => s.setUser)

  useEffect(() => {
    const run = async () => {
      const me = await getMe()
      setUser(me)
    }

    void run()
  }, [])

  return <div>Dashboard</div>
}
