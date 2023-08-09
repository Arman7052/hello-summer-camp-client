import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import {  Fade, Zoom } from "react-awesome-reveal";
import useInstructors from '../../../CustomHooks/useInstructors';


const PopularClasses = () => {
 const [instructorData] =useInstructors();

  const sortedClasses = instructorData.sort((a, b) => b.number_of_students - a.number_of_students);

  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="container mx-auto p-4 py-10 mt-5">
      <Fade direction="down" duration={2000}>
      <SectionTitle
        subheading={"Here is"}
        heading={"Our Popular classes"}
      ></SectionTitle>
      </Fade>
      <Zoom duration={2000}>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
        {topClasses.map((instructorData) => (
          <li key={instructorData._id}>
            <div className='py-2'>
              <h2 className="text-lg text-center font-serif font-bold">{instructorData.sport}</h2>
              <p className='text-center font-bold font-serif text-base'>Number of Students: {instructorData.number_of_students}</p>
            </div>
            <div>
              <img className='rounded-lg shadow-lg h-40 lg:h-64 w-full mx-auto' src={instructorData.img} alt="" />
            </div>
          </li>
        ))}
      </ul>
      </Zoom>
    </div>
  );
};

export default PopularClasses;
