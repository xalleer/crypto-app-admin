import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomButton from '@components/ui/CustomButton.tsx'
import CustomInput from '@components/ui/CustomInput.tsx'
import { signIn } from '../api/auth.api'
import { useAuthStore } from '@features/auth'
import handleError from '@utils/handleError'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SignInFormValues, signInSchema } from '../utils/auth.validation.ts'

export default function SignInForm() {
  const navigate = useNavigate()
  const setToken = useAuthStore((s) => s.setToken)

  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      const response = await signIn({ username: values.username, password: values.password })
      const token = response.access_token
      if (!token) {
        setSubmitError('Не вдалося отримати токен авторизації')
        return
      }
      setToken(token)
      navigate('/dashboard')
    } catch (err) {
      setSubmitError(handleError(err))
    }
  })

  return (
    <form className="auth-card__form" onSubmit={onSubmit}>
      <div className="auth-card__field">
        <span className="auth-card__label">Нікнейм</span>
        <CustomInput type="text" placeholder="User0101" {...register('username')} required />
        {errors.username?.message ? (
          <span className="auth-card__error">{errors.username.message}</span>
        ) : null}
      </div>

      <div className="auth-card__field">
        <span className="auth-card__label">Пароль</span>
        <CustomInput type="password" placeholder="********" {...register('password')} required />
        {errors.password?.message ? (
          <span className="auth-card__error">{errors.password.message}</span>
        ) : null}
      </div>

      {submitError ? <div className="auth-card__submit-error">{submitError}</div> : null}

      <CustomButton text="Увійти" variant="solid" type="submit" loading={isSubmitting} />
      <p className="auth-card__footer">
        Немає аккаунта?{' '}
        <span>
          <NavLink to="/sign-up">Створити</NavLink>
        </span>
      </p>
    </form>
  )
}
