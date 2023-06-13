import { useEffect, useState } from "react";


const useInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        fetch('http://localhost:7052/instructors')
            .then(response => response.json())
            .then(data => {
                setInstructorsData(data);
                setLoading(false);
            })
            
    }, []);
    return [instructorsData,loading]
};

export default useInstructors;