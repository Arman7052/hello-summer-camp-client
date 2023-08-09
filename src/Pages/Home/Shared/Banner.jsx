import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Lottie from 'lottie-react';
import animation1 from '../../../assets/lottie/animation1.json';
import animation2 from '../../../assets/lottie/animation2.json';
import animation3 from '../../../assets/lottie/animation3.json';

const Banner = () => {


  return (
    <div className='pt-32 text-black'>
      <Carousel className="pb-10 text-center px-2" infiniteLoop={true}>
        <div className="carousel-sle text-black flex flex-col-reverse justify-center  items-center md:flex-row md:justify-between text-xm md:text-lg md:font-semibold md:pl-10">
          
            
            <TypeAnimation
              sequence={[
                'Learn & Fun with ',
                1000,
                'SummerEdutainment', 1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: '2em', textAlign: 'center' }}
              repeat={Infinity}
            />

          
          <Lottie
            animationData={animation1}
            loop={true}
            autoplay={true}
            style={{ width: '50%', height: 'auto' }}
          />
         

        </div>
        <div className="carousel-sle text-black flex flex-col justify-center  items-center md:flex-row md:justify-between text-xm md:text-lg md:font-semibold md:pl-6">
          <Lottie
            animationData={animation2}
            loop={true}
            autoplay={true}
            style={{ width: '50%', height: 'auto' }}
          />
          
            <TypeAnimation
              sequence={[
                'Summer Camp',
                1000,
                'Awesome experience', 1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: '2em', textAlign: 'center' }}
              repeat={Infinity}
            />

        </div>
        <div className="carousel-sle text-black flex flex-col justify-center  items-center md:flex-row md:justify-between text-xm md:text-lg md:font-semibold md:pl-6">
          
        <TypeAnimation
              sequence={[
                'Give you Challenges',
                1000,
                'Give New Relationships', 1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: '2em', textAlign: 'right' }}
              repeat={Infinity}
            />
          
          <Lottie
            animationData={animation3}
            loop={true}
            autoplay={true}
            style={{ width: '50%', height: '80%' }}
          />
       
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
