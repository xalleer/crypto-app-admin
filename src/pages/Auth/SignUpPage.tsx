import CustomInput from "@components/CustomInput.tsx";
import CustomButton from "@components/CustomButton.tsx";
import {NavLink} from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="auth-card">
      <header className="auth-card__header">
        <h2 className="auth-card__title">Реєстрація</h2>
        <p className="auth-card__hint">Створи обліковий запис, щоб отримати доступ до адмін-панелі</p>
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

        <CustomButton text="Зареєструватися" variant="solid" />
        <p className="auth-card__footer">
          Вже є аккаунт? <span><NavLink to="/sign-in">Увійти</NavLink></span>
        </p>
      </form>
    </div>
  )

}
