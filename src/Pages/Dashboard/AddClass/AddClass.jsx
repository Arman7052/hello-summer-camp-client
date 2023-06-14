import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const AddClass = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    

    const onSubmit = (data) => {
        if (user && user.email) {
           
            fetch('https://hello-summer-camp-server.vercel.app/addClasses', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    if (data.insertedId) {
                        
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                    } 
                }
            })
        }
    }

    return (
        <div className="max-w-md mx-auto" >
            <Helmet>
                <title> Summer Edutainment | Add Class</title>
            </Helmet>
            <h1 className="text-5xl font-bold font-serif text-orange-600 text-center italic py-5">
            Add Class
          </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-2 gap-4 mx-auto">

                <div>
                    <label htmlFor="instructorName" className="block font-medium">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        {...register('instructorName', { required: true })}
                        readOnly
                        value={user.displayName} // Replace with actual user data
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="instructorEmail" className="block font-medium">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        {...register('instructorEmail', { required: true })}
                        readOnly
                        value={user.email}
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="className" className="block font-medium">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        placeholder='Class Name'
                        {...register('className', { required: true })}
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                    {errors.photoURL && (
                        <span className="text-red-600">
                            Class Name is required
                        </span>
                    )}
                </div>

                <div className="form-control">
                    <label htmlFor="className" className="block font-medium">
                       Class Image
                    </label>
                    <input
                        type="text"
                        {...register("photoURL", { required: true })}
                        placeholder="Photo URL"
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                    {errors.photoURL && (
                        <span className="text-red-600">
                            Photo URL is required
                        </span>
                    )}
                </div>



                <div>
                    <label htmlFor="availableSeats" className="block font-medium">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        placeholder='Available seat'
                        {...register('availableSeats', { required: true })}
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                    {errors.photoURL && (
                        <span className="text-red-600">
                            Available Seats is required
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="price" className="block font-medium">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        placeholder='Price'
                        {...register('price', { required: true })}
                        className="border-gray-300 border w-full p-2 rounded"
                    />
                    {errors.photoURL && (
                        <span className="text-red-600">
                           Price is required
                        </span>
                    )}
                </div>

                <div>
                    <button
                        type="submit"
                        className=" bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddClass;
