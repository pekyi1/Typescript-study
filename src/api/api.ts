import { API_URL } from "../config/config";
import axios from "axios";

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: false
})