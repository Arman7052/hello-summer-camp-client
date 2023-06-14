import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


   

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
    const {refetch , data: selectedClass =[]} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://hello-summer-camp-server.vercel.app/selectedClasses?email=${user.email}`)
            return res.json();
        },
    })
    return [selectedClass, refetch]
}



export default useSelectedClass;