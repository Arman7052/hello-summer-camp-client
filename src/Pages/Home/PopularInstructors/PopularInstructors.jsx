
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { JackInTheBox, Flip } from "react-awesome-reveal";
import useInstructors from "../../../CustomHooks/useInstructors";

const PopularInstructors = () => {
   const [instructorsData] = useInstructors()
   
  
    

    const sortedInstructors = instructorsData.sort((a, b) => b.number_of_students - a.number_of_students);

    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <div className="container mx-auto p-4 py-5">
            <Flip direction="down" duration={2000}>
            <SectionTitle
                subheading={"Find Our"}
                heading={"Popular Instructors"}
            ></SectionTitle>
            </Flip>
           <JackInTheBox cascade damping={0.2}>
           <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
                {topInstructors.map((instructorData, index) => (
                    <li
                        key={instructorData._id}
                        className=" w-3/4 h-80 mx-auto rounded-lg shadow-md"
                        data-aos="fade-up" 
                        data-aos-delay={(index + 1) * 100} 
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(63, 63, 63, 0) 0%, rgba(63, 63, 63, 0.5) 100%), url(${instructorData.img})`, backgroundSize: 'cover' }}
                    >
                        <div className="bg-gradient-to-b rounded-md from-indigo-600 via-transparent to-transparent h-full">
                        <h2 className="text-lg text-center font-serif italic py-2 text-black font-bold">{instructorData.instructor_name}</h2>
                        <p className='text-center font-bold font-serif text-base text-black shadow-2xl'>Instructor of: {instructorData.sport} </p>
                        <p className='text-center font-bold font-serif text-base text-black shadow-2xl'>Number of Students: {instructorData.number_of_students}</p>
                        </div>
                    </li>
                ))}
            </ul>
           </JackInTheBox>
        </div>
    );
};

export default PopularInstructors;
