import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelectedClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:7052/selectedClasses?email=${user?.email}`)

            return response.json()
        },
    });
    return [selectedClass, refetch]
};

export default useSelectedClass;