import axios from "axios";

export const axiosInstance = axios.create({
  // Sử dụng biến môi trường bạn đã cài trên Render
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : import.meta.env.VITE_API_URL + "/api", 
  withCredentials: true,
});