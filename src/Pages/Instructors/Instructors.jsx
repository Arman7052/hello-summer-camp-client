import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { Bounce, JackInTheBox, Fade, Zoom } from "react-awesome-reveal";
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



            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
                {instructorsData.map((instructorData) => (
                    <li key={instructorData._id} className="py-5">
                      

                        <div className=" flex justify-center">
                            <JackInTheBox duration={4000}>
                                <img className="h-16 w-16 rounded-full" src={instructorData.instructor_img} alt={instructorData.instructor_img} />
                            </JackInTheBox>
                        </div>
                        <Fade direction="left" duration={1000} >
                            <h2 className="text-lg text-center font-serif italic py-2 text-black font-bold">{instructorData.instructor_name}
                            </h2>
                        </Fade>
                        <Zoom duration={4000}>
                            <p className='text-center font-bold font-serif text-base'>Email: {instructorData.email}</p>
                            <p className='text-center font-bold font-serif text-base'>Instructor of: {instructorData.sport}
                            </p>
                        </Zoom>


                    </li>
                ))}
            </ul>


        </div>
    );
};

export default Instructors;