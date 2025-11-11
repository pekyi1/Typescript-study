import { api } from "../api/api"


export const getAllUsers = async () => {
    const res = await api.get('https://dummyjson.com/users');
    return res.data.users;
}

