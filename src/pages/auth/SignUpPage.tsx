import SignUpForm from '@features/auth/components/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h2 className="auth-card__title">Реєстрація</h2>
        <p className="auth-card__hint">
          Створи обліковий запис, щоб отримати доступ до адмін-панелі
        </p>
      </header>

      <SignUpForm />
    </div>
  )
}
