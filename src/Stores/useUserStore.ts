import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UserData {
    id: number;
    gender: string;
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    image: string;
    username: string;
}

interface UserStore {
    user: UserData | null;
    setUser: (user: UserData) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "userStorage",
        }
    )
);

