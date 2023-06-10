import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { Flip, Bounce } from "react-awesome-reveal";
import useInstructors from "../../CustomHooks/useInstructors";



const Instructors = () => {
    const [instructorsData] = useInstructors();
    return (
        <div>
            <Helmet>
                <title> Summer Edutainment | Instructors</title>
            </Helmet>
            {/* Banner */}
            <div
                className="hero rounded-lg min-h-screen pb-5"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0cyUyMGNvYWNofGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60")',
                }}
            >
                <div className="hero-overlay rounded-lg bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mx-auto">

                        <Bounce duration={1000}>
                            <SectionTitle
                                subheading={'Meet Our'}
                                heading={'Instructors'}
                            ></SectionTitle>
                            <p className="mb-5 text-indigo-200 shadow-lg">
                                Summer Edutainment sports instructors are experienced professionals who combine education and entertainment to teach children valuable skills, foster teamwork, and promote physical activity through engaging and fun-filled sports activities.
                            </p>

                        </Bounce>

                    </div>
                </div>
            </div>

            <SectionTitle
                subheading={'Meet Our'}
                heading={'Instructors'}
            ></SectionTitle>


            <Flip cascade damping={0.5}>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
                    {instructorsData.map((instructorData) => (
                        <li
                            key={instructorData._id}
                            className=" w-3/4 h-80 mx-auto rounded-lg shadow-md"
                            
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(63, 63, 63, 0) 0%, rgba(63, 63, 63, 0.5) 100%), url(${instructorData.instructor_img})`, backgroundSize: 'cover' }}
                        >
                            <div className="bg-gradient-to-b rounded-md from-indigo-600 via-transparent to-transparent h-full">
                                <h2 className="text-lg text-center font-serif italic py-2 text-black font-bold">{instructorData.instructor_name}</h2>
                                <p className='text-center font-bold font-serif text-base text-black shadow-2xl'>Email: {instructorData.email}</p>
                                <p className='text-center font-bold font-serif text-base text-black shadow-2xl'>Instructor of: {instructorData.sport} </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Flip>

        </div>
    );
};

export default Instructors;