import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const PopularInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('instructor.json')
                .then(response => response.json())
                .then(data => setInstructorsData(data))
                .catch(error => console.error('Error fetching classes data:', error));
        };

        fetchData();

        AOS.init(); // Initialize AOS
    }, []);

    const sortedInstructors = instructorsData.sort((a, b) => b.number_of_students - a.number_of_students);

    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <div className="container mx-auto p-4 py-5">
            <SectionTitle
                subheading={"Here is"}
                heading={"Our Popular Instructors"}
            ></SectionTitle>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {topInstructors.map((instructorData, index) => (
                    <li
                        key={instructorData.id}
                        className="bg-indigo-300 w-2/4 mx-auto rounded-lg shadow-md p-2"
                        data-aos="fade-up" // Add data-aos attribute for animation
                        data-aos-delay={(index + 1) * 100} // Add delay for staggered animation
                    >
                        <h2 className="text-lg text-center font-serif italic font-bold">{instructorData.instructor_name}</h2>
                        <p className='text-center font-bold font-serif text-base'>Instructor of: {instructorData.sport} </p>
                        <p className='text-center font-bold font-serif text-base'>Number of Students: {instructorData.number_of_students}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularInstructors;
