import axios from 'axios'

type MaybeRecord = Record<string, unknown>

export function handleError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = (error.response?.data ?? null) as unknown

    if (typeof data === 'string' && data.trim().length > 0) {
      return data
    }

    if (data && typeof data === 'object') {
      const obj = data as MaybeRecord
      const message = obj.message
      if (typeof message === 'string' && message.trim().length > 0) {
        return message
      }
      const errorText = obj.error
      if (typeof errorText === 'string' && errorText.trim().length > 0) {
        return errorText
      }
    }

    if (typeof error.message === 'string' && error.message.trim().length > 0) {
      return error.message
    }

    return 'Сталася помилка при виконанні запиту'
  }

  if (error instanceof Error && error.message.trim().length > 0) {
    return error.message
  }

  return 'Сталася невідома помилка'
}

export default handleError
