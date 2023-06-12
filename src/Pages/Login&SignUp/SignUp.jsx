import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import loginBG from "../../assets/authentication.png"
import loginimg from '../../assets/authentication2.png'
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Home/Shared/Navbar";
import Footer from "../Home/Shared/Footer";
import SocialLogin from "../Home/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>
            <div className="lg:max-w-7xl mx-auto">
            <Navbar></Navbar>
           
           <div style={{ backgroundImage: `url(${loginBG})` }}>
               <Helmet>
                   <title>Bistro Boss | Sign Up</title>
               </Helmet>
               <h1 className="text-5xl font-bold font-serif text-center italic py-36">Sign up now!</h1>
               <div className="hero min-h-screen pb-10">
                   
                   <div className="hero-content flex-col lg:flex-row-reverse">
                       <div className="text-center lg:text-left">
                          
                           <img src={loginimg} alt={loginimg} />
                       </div>
                       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                               <div className="form-control">
                                   <label className="label">
                                       <span className="label-text">Name</span>
                                   </label>
                                   <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered bg-white text-black" />
                                   {errors.name && <span className="text-red-600">Name is required</span>}
                               </div>
                               <div className="form-control">
                                   <label className="label">
                                       <span className="label-text">Photo URL</span>
                                   </label>
                                   <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered bg-white text-black" />
                                   {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                               </div>
                               <div className="form-control">
                                   <label className="label">
                                       <span className="label-text">Email</span>
                                   </label>
                                   <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered bg-white text-black" />
                                   {errors.email && <span className="text-red-600">Email is required</span>}
                               </div>
                               <div className="form-control">
                                   <label className="label">
                                       <span className="label-text">Password</span>
                                   </label>
                                   <input type="password"  {...register("password", {
                                       required: true,
                                       minLength: 6,
                                       maxLength: 20,
                                       pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                   })} placeholder="password" className="input input-bordered bg-white text-black" />
                                   {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                   {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                   {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                   {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                   
                               </div>
                               <div className="form-control mt-6">
                                   <input className="btn bg-[#D1A054] text-white" type="submit" value="Sign Up" />
                               </div>
                           </form>
                           <div className='divider mx-3 italic'>SignUp With</div>
                           <SocialLogin></SocialLogin>
                           <p className=' text-center py-5 font-semibold font-mono '><small>Already have an account <Link to="/login" className=" underline italic">Login</Link></small></p>
                       </div>
                   </div>
               </div>
           </div>
           <Footer></Footer>
            </div>
           
        </>
    );
};

export default SignUp;