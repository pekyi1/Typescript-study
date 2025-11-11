import { create } from "zustand";


interface UserData{
    id: number;
    firstName: string;
    lastName: string; 
    email: string;
    age: number;
    image: string;
    role: string;
    address:{
        address: string;
        city: string;
    };
}

interface usersStore{
    users: UserData[];
    setUsers: (users: UserData[]) => void;
}

export const useUsersStore = create<usersStore>((set) => ({
    users: [],
    setUsers: (users) => set({users}),
    
}));