import { UserRole } from '@features/auth'

export const normalizeRole = (role: UserRole) => {
  switch (role) {
    case UserRole.ADMIN:
      return 'Admin'
    case UserRole.SUPER_ADMIN:
      return 'Super Admin'
    default:
      return 'User'
  }
}
