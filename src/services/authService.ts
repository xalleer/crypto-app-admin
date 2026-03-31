import apiService from "./apiService";
import type {SignInRequest} from "@/types/auth";

export const signIn = ({ username, password }: SignInRequest) => {
  return apiService.post('/auth/sign-in', { username, password });
};
