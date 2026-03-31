import SignInForm from '@features/auth/components/SignInForm'

export default function SignInPage() {
  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h2 className="auth-card__title">Вхід</h2>
        <p className="auth-card__hint">Увійди, щоб продовжити роботу в адмін-панелі</p>
      </header>

      <SignInForm />
    </div>
  )
}
