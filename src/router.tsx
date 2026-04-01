import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import SignInPage from '@pages/auth/SignInPage'
import SignUpPage from '@pages/auth/SignUpPage'
import DashboardPage from '@pages/dashboard/DashboardPage.tsx'
import RequireAuth from '@components/RequireAuth'
import BalancePage from '@pages/balance/BalancePage.tsx'
import HistoryPage from '@pages/history/HistoryPage.tsx'
import ChatPage from '@pages/chat/ChatPage.tsx'
import PositionsPage from '@pages/positions/PositionsPage.tsx'
import StatsPage from '@pages/stats/StatsPage.tsx'

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
  {
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/balance', element: <BalancePage /> },
      { path: '/history', element: <HistoryPage /> },
      { path: '/chat', element: <ChatPage /> },
      { path: '/positions', element: <PositionsPage /> },
      { path: '/stats', element: <StatsPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/sign-in" replace />,
  },
])

export default router
