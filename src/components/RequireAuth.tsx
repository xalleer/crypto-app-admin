import { Navigate } from 'react-router-dom'
import type { JSX } from 'react'
export default function RequireAuth({ children }: { children: JSX.Element }) {
  const raw = localStorage.getItem('auth-storage')
  const token = raw ? (JSON.parse(raw) as { state?: { token?: string | null } }).state?.token : null
  if (!token) return <Navigate to="/sign-in" replace />
  return children
}
