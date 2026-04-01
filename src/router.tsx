import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import SignInPage from '@pages/auth/SignInPage'
import SignUpPage from '@pages/auth/SignUpPage'
import DashboardPage from "@pages/dashboard/DashboardPage.tsx";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/sign-in" replace />,
  },
])

export default router
