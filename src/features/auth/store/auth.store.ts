import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { GetMeResponse } from '@features/auth/types/auth.types.ts'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  user: GetMeResponse | null
  setToken: (token: string) => void
  setUser: (user: GetMeResponse | null) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      user: null,
      setToken: (token) => set({ token, isAuthenticated: true }),
      setUser: (user) => set({ user }),
      clearToken: () => set({ token: null, isAuthenticated: false, user: null }),
    }),
    { name: 'auth-storage' },
  ),
)
