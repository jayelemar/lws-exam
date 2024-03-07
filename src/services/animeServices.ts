
// import { useLeaveStore } from "@/store/leaveStore";
// import { LeaveFormProps } from "@/types/leaveTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios"

export interface CreateAnimeFormProps {
  name: string,
  leaveType: string,
  startDate: Date,
  endDate: Date,
  reason: string,
  contactAddress: string, 
  contactNumber:  string,
}


const BACKEND_URL: string = process.env.NEXT_BACKEND_URL || 'http://localhost:8000'

// Create a new Leave Request
export const useCreateAnime = () => {
  const createLeave = async (data: CreateAnimeFormProps) => {
      const response = await axios.post(`${BACKEND_URL}/api/animes`, data)
        console.log(response.data);
  };

  return useMutation({
    mutationKey:['createAnime'],
    mutationFn: createLeave
  })
}