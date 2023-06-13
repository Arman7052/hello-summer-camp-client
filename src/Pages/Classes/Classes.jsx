import { Bounce, Flip } from "react-awesome-reveal";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useInstructors from "../../CustomHooks/useInstructors";
import { Helmet } from "react-helmet-async";
import ClassCard from "./ClassCard";


const Classes = () => {
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
                                subheading={'See Our'}
                                heading={'Classes'}
                            ></SectionTitle>
                            <p className="mb-5 text-indigo-200 shadow-lg">
                                Summer Edutainment sports instructors are experienced professionals who combine education and entertainment to teach children valuable skills, foster teamwork, and promote physical activity through engaging and fun-filled sports activities.
                            </p>

                        </Bounce>

                    </div>
                </div>
            </div>

            <SectionTitle
                subheading={'Here Our All'}
                heading={'Classes'}
            ></SectionTitle>


            <Flip cascade damping={0.5}>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
                    {instructorsData.map((item) => (
                        <ClassCard
                            key={item._id}
                            item={item}
                        ></ClassCard>
                    ))}
                </ul>
            </Flip>

        </div>
    );
};


export default Classes;