'use client';
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface RegisterUser {
  name:string,
  email: string,
  password: string,
}

export interface LoginUser {
  email: string,
  password: string,
}
const BACKEND_URL:string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL 

// Register User
export const useRegisterUser = () => {
  const registerUser = async (data: RegisterUser) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/register`, data)
      if (response.status === 201) {
        return response.data
      } else {
        console.error("Unexpected status code:", response.status);
        console.error("An unexpected error occurred");
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        console.error(message);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  }
  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: registerUser,
  })
}

// Login User
export const useLoginUser = () => {
  const loginUser = async (data: LoginUser) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/login`, data)
      if(response.data.success) {
        console.log("Login Successful...");
      }
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        console.log(message);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  }
  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
  })
}

// Get Login Status
export const useGetLoginStatus = () => {
  const getLoginStatus = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`)
    return response.data
  }
  return useQuery({
    queryKey: ['users'],
    queryFn: getLoginStatus,
  })
}

// Logout User
export const useLogoutUser = () => {
  const logoutUser = async () => {
    await axios.get(`${BACKEND_URL}/api/users/logout`)
    return false
  }
  return useMutation({
    mutationKey: ['logoutUser'],
    mutationFn: logoutUser,
  })
}