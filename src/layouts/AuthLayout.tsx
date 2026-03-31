import { Outlet } from 'react-router-dom'
import '../styles/layouts/_auth-layout.scss'
export default function AuthLayout() {
  return (
    <main className="auth-layout">
      <section className="auth-layout__shell">
        <aside className="auth-layout__brand" aria-label="Brand">
          <div className="auth-layout__brand-inner">
            <h1 className="auth-layout__title">
              Neuro <span className="auth-layout__accent">Trade</span>
            </h1>
            <p className="auth-layout__subtitle">
              Адмін-панель для керування, аналітики та доступів
            </p>
            <div className="auth-layout__highlights" aria-hidden="true">
              <div className="auth-layout__pill">Швидкий старт</div>
              <div className="auth-layout__pill">Безпечний доступ</div>
              <div className="auth-layout__pill">Гнучкі ролі</div>
            </div>
          </div>
          <div className="auth-layout__decor" aria-hidden="true" />
        </aside>

        <section className="auth-layout__content" aria-label="Auth content">
          <Outlet />
        </section>
      </section>
    </main>
  )
}
