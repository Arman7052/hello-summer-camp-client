import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Flip } from "react-awesome-reveal";

const Category = () => {
    return (
        <section className=" py-10 ">
            <Flip direction="down" duration={2000}>
            <SectionTitle
                subheading={"Explore Here"}
                heading={"OUR SCHOOL ACTIVITIES"}
            >

            </SectionTitle>

            </Flip>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                className="mySwiper text-center "
            >
                <SwiperSlide><img src="https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFza2V0YmFsbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" className=" rounded-md" alt="https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFza2V0YmFsbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Basketball</h2>
                </SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1614743758466-e569f4791116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbm5pc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" className=" rounded-md" alt="https://images.unsplash.com/photo-1614743758466-e569f4791116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbm5pc3xlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Tennis</h2>
                </SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dpbW1pbmd8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=600&q=60" className=" rounded-md" alt="https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dpbW1pbmd8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Swimming</h2>
                </SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29jY2VyfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60" className=" rounded-md" alt="https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29jY2VyfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Soccer</h2>
                </SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" className=" rounded-md" alt="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Cricket</h2>
                </SwiperSlide>

                <SwiperSlide><img src="https://images.unsplash.com/photo-1629431390633-0e70fdf7886e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Vm9sbGV5YmFsbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" 
                className="rounded-md"  alt="https://images.unsplash.com/photo-1629431390633-0e70fdf7886e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Vm9sbGV5YmFsbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Volleyball</h2>
                </SwiperSlide>
                <SwiperSlide><img className="h-auto rounded-md" src="https://images.unsplash.com/photo-1510925751334-0fe90906839b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJjaGVyeXxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" alt="https://images.unsplash.com/photo-1510925751334-0fe90906839b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJjaGVyeXxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" />
                    <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Archery</h2>
                </SwiperSlide>



            </Swiper>
        </section>
    );
};

export default Category;