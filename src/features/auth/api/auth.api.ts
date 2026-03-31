import apiService from '@services/api.service.ts'
import type {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../types/auth.types'

export const signIn = ({ username, password }: SignInRequest): Promise<SignInResponse> => {
  return apiService.post('/auth/login', { username, password })
}

export const signUp = ({ username, password }: SignUpRequest): Promise<SignUpResponse> => {
  return apiService.post('/auth/register', { username, password })
}
