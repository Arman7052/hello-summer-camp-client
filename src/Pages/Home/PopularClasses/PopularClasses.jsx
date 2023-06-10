import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import {  Flip } from "react-awesome-reveal";
import useInstructors from '../../../CustomHooks/useInstructors';

const PopularClasses = () => {
 const [instructorData] =useInstructors();

  const sortedClasses = instructorData.sort((a, b) => b.number_of_students - a.number_of_students);

  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="container mx-auto p-4 py-5">
      <Flip direction="down" duration={2000}>
      <SectionTitle
        subheading={"Here is"}
        heading={"Our Popular classes"}
      ></SectionTitle>
      </Flip>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {topClasses.map((classData, index) => (
          <li
            key={classData._id}
            className="bg-transparent shadow-md p-2"
            data-aos="fade-left"
            data-aos-delay={(index + 1) * 200}
          >
            <div className='py-2'>
              <h2 className="text-lg text-center font-serif font-bold">{classData.sport}</h2>
              <p className='text-center font-bold font-serif text-base'>Number of Students: {classData.number_of_students}</p>
            </div>
            <div>
              <img className='rounded-lg h-48 lg:h-80 w-full mx-auto' src={classData.img} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularClasses;
