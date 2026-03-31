import CustomInput from "@components/CustomInput.tsx";
import CustomButton from "@components/CustomButton.tsx";
import {NavLink} from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h2 className="auth-card__title">Вхід</h2>
        <p className="auth-card__hint">Увійди, щоб продовжити роботу в адмін-панелі</p>
      </header>

      <form className="auth-card__form">
        <div className="auth-card__field">
          <span className="auth-card__label">Нікнейм</span>
          <CustomInput type="text" placeholder="User0101" />
        </div>

        <div className="auth-card__field">
          <span className="auth-card__label">Пароль</span>
          <CustomInput type="password" placeholder="********" />
        </div>

        <CustomButton text="Увійти" variant="solid" />
        <p className="auth-card__footer">
          Немає аккаунта? <span><NavLink to="/sign-up">Створити</NavLink></span>
        </p>
      </form>
    </div>
  )
}
