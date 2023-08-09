
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Fade, JackInTheBox, Zoom } from "react-awesome-reveal";
import useInstructors from "../../../CustomHooks/useInstructors";

const PopularInstructors = () => {
    const [instructorsData] = useInstructors()




    const sortedInstructors = instructorsData.sort((a, b) => b.number_of_students - a.number_of_students);

    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <div className="container mx-auto p-4 py-5">
            <Fade direction="down" duration={2000}>
                <SectionTitle
                    subheading={"Find Our"}
                    heading={"Popular Instructors"}
                ></SectionTitle>
            </Fade>

            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-1 py-2">
                {topInstructors.map((instructorData) => (
                    <li key={instructorData._id}  className=" py-2">
                        <div  className=" flex justify-center">
                           <JackInTheBox duration={4000}>
                           <img className="h-16 w-16 rounded-full" src={instructorData.instructor_img} alt={instructorData.instructor_img} />
                           </JackInTheBox>
                        </div>
                       <Fade direction="left" duration={1000}>
                       <h2 className="text-lg text-center font-serif italic py-2 text-black font-bold">{instructorData.instructor_name}
                        </h2>
                       </Fade>
                       <Zoom duration={4000}>
                       <p className='text-center font-bold font-serif text-base '>Instructor of: {instructorData.sport} </p>
                        <p className='text-center font-bold font-serif text-base '>Number of Students: {instructorData.number_of_students}
                        </p>
                       </Zoom>

                       
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default PopularInstructors;
