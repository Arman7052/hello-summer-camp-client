import { Link } from 'react-router-dom';
import errorImg from '../public/download.jpg'

const Error = () => {
    return (
        <div className="card h-screen w-full rounded-none image-full">
        <figure><img className='w-full' src={errorImg} alt="Shoes" /></figure>
        <div className="card-body text-5xl text-center font-serif">
          <h2 className="font-bold  mt-10">404! </h2>
          <p className=' pt-5'>Sun is about to set . Time to go...</p>
         <p>
         <Link to='/'>
            <button className=" btn btn-outline btn-error text-xl  lg:w-60">Home</button>
          </Link>
         </p>
        </div>
      </div>
    );
};

export default Error;