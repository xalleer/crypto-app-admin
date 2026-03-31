import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import router from './router'
import './styles/index.scss'

const theme = extendTheme({
  fontFamily: {
    body: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    display: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  },
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: 'var(--bg-primary)',
          surface: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        primary: {
          solidBg: 'var(--accent-primary)',
          solidHoverBg: 'color-mix(in srgb, var(--accent-primary) 85%, white)',
          solidActiveBg: 'color-mix(in srgb, var(--accent-primary) 75%, white)',
          solidColor: 'var(--text-primary)',
        },
        neutral: {
          outlinedBorder: 'var(--border)',
          outlinedColor: 'var(--text-primary)',
          plainColor: 'var(--text-primary)',
          softColor: 'var(--text-primary)',
          softBg: 'color-mix(in srgb, var(--bg-secondary) 70%, transparent)',
        },
        divider: 'var(--border)',
      },
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          '--Input-focusedHighlight': 'var(--accent-primary)',
          '--Input-placeholderColor': 'var(--text-muted)',
          '--Input-radius': '10px',
          color: 'var(--text-primary)',
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          '--Button-radius': '10px',
          fontWeight: 600,
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark" modeStorageKey="crypto-admin-color-scheme">
      <RouterProvider router={router} />
    </CssVarsProvider>
  </StrictMode>,
)
