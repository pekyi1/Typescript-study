import { api } from "../api/api";

export interface loginData{
    username: string;
    password: string;
}

export const login = async (data: loginData) => {
    const res = await api.post('/auth/login', data);
    return res.data;
}
