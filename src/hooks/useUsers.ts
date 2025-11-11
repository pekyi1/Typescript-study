import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/userService";
import { useUsersStore } from "../Stores/useUsersStore";
import { useEffect } from "react";

export function useUsers() {
    const setUsers = useUsersStore((state) => state.setUsers);

    const query =  useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });

    useEffect(() => {
        if(query.data){
            setUsers(query.data);
        }
    }, [query.data, setUsers])

    return query;

}