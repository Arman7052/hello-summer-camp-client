import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('instructor.json')
        .then(response => response.json())
        .then(data => setClassesData(data))
        .catch(error => console.error('Error fetching classes data:', error));
    };

    fetchData();

    AOS.init(); // Initialize AOS
  }, []);

  const sortedClasses = classesData.sort((a, b) => b.number_of_students - a.number_of_students);

  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="container mx-auto p-4 py-5">
      <SectionTitle
        subheading={"Here is"}
        heading={"Our Popular classes"}
      ></SectionTitle>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {topClasses.map((classData, index) => (
          <li
            key={classData.id}
            className="bg-transparent shadow-md p-2"
            data-aos="fade-left" // Add data-aos attribute for animation
            data-aos-delay={(index + 1) * 200} // Add delay for staggered animation
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
