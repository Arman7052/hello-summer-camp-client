import loginimg from '../../../src/assets/authentication2.png';
import loginBG from '../../assets/authentication.png';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';



const Login = () => {
   
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    

    return (

        <div style={{ backgroundImage: `url(${loginBG})` }}>
            <Helmet>
                <title> Bistro Boss | Login</title>

            </Helmet>
            
            <div className="hero min-h-screen shadow-xl">
                <div className="hero-content flex-col lg:flex-row shadow-2xl">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-serif italic text-center py-10">Login Now!</h1>
                        <img src={loginimg} alt={loginimg} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                           
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='divider mx-3 italic'>Login With</div>
                        

                        <p className=' text-center py-5 font-semibold font-mono'><small>New Here? <Link to="/signup" className=" underline  italic">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;