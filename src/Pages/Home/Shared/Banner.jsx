
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerTitle from "../../../Component/BannerTitle/BannerTitle";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Carousel className="pb-10 text-center">
      <div className="carousel-slide">
        <img
          className="carousel-image bg-black opacity-50"
          src="https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwc2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwc2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        />
        <p className="carousel-text" data-aos="fade-up"  data-aos-delay="1000">
          <BannerTitle subheading={'Learn & Fun with'} heading={'Summer Edutainment'}></BannerTitle>
        </p>
      </div>
      <div className="carousel-slide">
        <img
          className="carousel-image bg-black opacity-60"
          src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bW1lciUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bW1lciUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <p className="carousel-text" data-aos="fade-up"  data-aos-delay="1000">
          <BannerTitle subheading={'Summer Camp'} heading={'To gain awesome experience'}></BannerTitle>
        </p>
      </div>
      <div className="carousel-slide">
        <img
          className="carousel-image opacity-60"
          src="https://images.unsplash.com/photo-1562552052-dbdd31c06339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bW1lciUyMHNjaG9vbCUyMHNwb3J0fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="https://images.unsplash.com/photo-1562552052-dbdd31c06339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bW1lciUyMHNjaG9vbCUyMHNwb3J0fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <p className="carousel-text" data-aos="fade-up"  data-aos-delay="1000">
          <BannerTitle subheading={'Give you'} heading={'Challenges & New Relationships'}></BannerTitle>
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;
