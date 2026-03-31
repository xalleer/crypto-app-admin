import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="main-layout">
      <aside className="main-layout__sidebar" />
      <div className="main-layout__content">
        <header className="main-layout__header" />
        <main className="main-layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
