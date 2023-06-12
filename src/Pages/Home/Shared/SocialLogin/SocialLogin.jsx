import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";


const SocialLogin = () => {
    const { setLoading, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
           
          })
      }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
            <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
            </div>
        </div>
    );
};

export default SocialLogin;