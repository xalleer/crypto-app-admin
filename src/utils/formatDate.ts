export const formatDate = (date: string) => {
  return Intl.DateTimeFormat('uk-UA').format(new Date(date))
}

export const formatTime = (date: string) => {
  return Intl.DateTimeFormat('uk-UA', { hour: '2-digit', minute: '2-digit' }).format(new Date(date))
}

export const formatDateTime = (date: string) => {
  return formatDate(date) + ' ' + formatTime(date)
}
