import { z } from 'zod'

const requiredText = (requiredError: string) => z.string({ required_error: requiredError })

const usernameSignInSchema = requiredText('Вкажи нікнейм').trim().min(1, 'Вкажи нікнейм')

const usernameSignUpSchema = requiredText('Вкажи нікнейм')
  .trim()
  .min(3, 'Нікнейм має бути мінімум 3 символи')

const passwordSchema = z
  .string({ required_error: 'Вкажи пароль' })
  .min(6, 'Пароль має бути мінімум 6 символів')

export const signInSchema = z.object({
  username: usernameSignInSchema,
  password: passwordSchema,
})

export const signUpSchema = z.object({
  username: usernameSignUpSchema,
  password: passwordSchema,
})

export type SignInFormValues = z.infer<typeof signInSchema>
export type SignUpFormValues = z.infer<typeof signUpSchema>
