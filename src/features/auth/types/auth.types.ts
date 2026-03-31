export const UserRole = {
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
  VIEWER: 'viewer',
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export interface SignInRequest {
  username: string
  password: string
}

export interface SignInResponse {
  access_token: string
  token_type: 'bearer'
}

export interface SignUpRequest {
  username: string
  password: string
  role: UserRole
}

export interface SignUpResponse {
  access_token: string
  token_type: 'bearer'
}
