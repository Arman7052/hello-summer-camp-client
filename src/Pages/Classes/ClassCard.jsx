import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const ClassCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const {_id , sport, img, price } =item;
    const navigate = useNavigate();
    const location = useLocation();
    const handleEnroll = item =>{
        console.log(item);
        if (user && user.email) {
            const classes = {  classId: _id, email: user.email , sport, img, price}
            fetch('http://localhost:7052/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(classes)
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
        }else {
            Swal.fire({
                title: 'You have to login first',
                text: "You can't add without login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }
    return (
        <div>
             <li
                        
                            className=" w-3/4 h-80 mx-auto rounded-lg shadow-md"

                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(63, 63, 63, 0) 0%, rgba(63, 63, 63, 0.5) 100%), url(${item.img})`, backgroundSize: 'cover' }}
                        >
                            <div className="bg-gradient-to-b rounded-md from-indigo-600 via-transparent to-transparent h-full">
                                <h2 className="text-lg text-center font-serif italic py-2 text-black font-bold">{item.sport}</h2>
                                <div className="card">
                                   

                                    <div className="bottom flex justify-center items-end">
                                        <button onClick={() => handleEnroll(item)} className=" btn btn-ghost hover:bg-blue-700 text-orange-500 font-bold py-2 px-4 rounded">
                                            <Link>Enroll Now</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
        </div>
    );
};

export default ClassCard;