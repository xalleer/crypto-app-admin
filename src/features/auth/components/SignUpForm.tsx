import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomButton from '@components/ui/CustomButton.tsx'
import CustomInput from '@components/ui/CustomInput.tsx'
import { signUp } from '../api/auth.api'
import handleError from '@utils/handleError'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SignUpFormValues, signUpSchema } from '../utils/auth.validation.ts'
import { UserRole } from '@features/auth/types/auth.types.ts'

export default function SignUpForm() {
  const navigate = useNavigate()

  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      await signUp({ username: values.username, password: values.password, role: UserRole.VIEWER })
      navigate('/sign-in')
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

      <CustomButton text="Зареєструватися" variant="solid" type="submit" loading={isSubmitting} />
      <p className="auth-card__footer">
        Вже є аккаунт?{' '}
        <span>
          <NavLink to="/sign-in">Увійти</NavLink>
        </span>
      </p>
    </form>
  )
}
