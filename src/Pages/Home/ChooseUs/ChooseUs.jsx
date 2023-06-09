
import { JackInTheBox, Flip } from "react-awesome-reveal";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ChooseUs = () => {
  return (
    <div className="py-10">
      <div
        className="hero rounded-lg min-h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1511448962213-2f9bc14ed197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwY2FtcCUyMGtpZHN8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=600&q=60")',
        }}
      >
        <div className="hero-overlay rounded-lg bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mx-auto">
            <Flip direction="down" duration={2000}>
            <SectionTitle
              subheading={"Our Benefits"}
               heading={"Why Choose Us"}
              
           ></SectionTitle>
            </Flip>
            <JackInTheBox delay={1000} cascade damping={0.2}>
            <p className="mb-5">
               Experience the ultimate summer edutainment on our website. With engaging and interactive programs designed for children of all ages, we offer a unique learning experience like no other. Our team of expert instructors brings their extensive knowledge and passion to each activity, ensuring a high-quality educational experience. From a diverse range of activities to flexible scheduling options, we prioritize your convenience. Our safe and secure learning environment provides parents with peace of mind. Join us for an unforgettable summer of growth, friendship, and fun. Register now and unlock a world of opportunities for your child personal development. Discover why we are the top choice for summer edutainment, where learning and entertainment go hand in hand.
             </p>
            </JackInTheBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;


// import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

// const ChooseUs = () => {
  

//   return (
//     <div className="py-10">
//       <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511448962213-2f9bc14ed197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwY2FtcCUyMGtpZHN8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=600&q=60")' }}>
//         <div className="hero-overlay rounded-lg bg-opacity-50"></div>
//         <div className="hero-content text-center text-neutral-content">
//           <div className="mx-auto">
//             <SectionTitle
//               subheading={"Our Benefits"}
//               heading={"Why Choose Us"}
              
//             ></SectionTitle>
//             <p className="mb-5">
//               Experience the ultimate summer edutainment on our website. With engaging and interactive programs designed for children of all ages, we offer a unique learning experience like no other. Our team of expert instructors brings their extensive knowledge and passion to each activity, ensuring a high-quality educational experience. From a diverse range of activities to flexible scheduling options, we prioritize your convenience. Our safe and secure learning environment provides parents with peace of mind. Join us for an unforgettable summer of growth, friendship, and fun. Register now and unlock a world of opportunities for your child personal development. Discover why we are the top choice for summer edutainment, where learning and entertainment go hand in hand.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
