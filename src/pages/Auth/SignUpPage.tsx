import CustomInput from "@components/CustomInput.tsx";
import CustomButton from "@components/CustomButton.tsx";

export default function SignUpPage() {
  return (
    <div className="container">
      <form className="form">
        <div>
          <h2>Реєстрація</h2>
        </div>
        <div className="input-group">
          <span>Нікнейм</span>
          <CustomInput type="text" placeholder="User0101" />
        </div>

        <div className="input-group">
          <span>Пароль</span>
          <CustomInput type="password" placeholder="********" />
        </div>

        <CustomButton text="Зареєструватися" variant="solid" />
      </form>
    </div>
  )

}
