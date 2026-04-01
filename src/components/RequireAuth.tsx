import { useAuthStore } from '@features/auth'

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const token = useAuthStore((s) => s.token)
  if (!token) return <Navigate to="/sign-in" replace />
  return children
}
