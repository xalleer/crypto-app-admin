import {useAuthStore} from "@features/auth";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
  const { clearToken } = useAuthStore()
  const navigate = useNavigate()

  return () => {
    useAuthStore.persist.clearStorage()
    clearToken()
    navigate('/sign-in', { replace: true })
  }
}
