import { Helmet } from "react-helmet-async";
import useSelectedClass from "../../../CustomHooks/useSelectedClass";

import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const SelectedClasses = () => {
    const [selectedClass, refetch] = useSelectedClass();
    console.log(selectedClass);
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item => {
        
    }
    return (
        <div>
            <Helmet>
                <title> Summer Edutainment | Selected Classes</title>
            </Helmet>


            <SectionTitle
                subheading={'My Selected'}
                heading={'Classes'}
            ></SectionTitle>
            <div className=" text-semibold text-black flex flex-row justify-between py-5">
                <h1> Total Classes : {selectedClass.length}</h1>
                <h1> Total Price : $ {total}</h1>

            </div>
            <div className="overflow-x-auto ">
                <table className=" table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody className=" pb-5">
                        {selectedClass.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt={item.img} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.sport}
                            </td>
                            <td className=" text-end">{item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs text-center text-red-700"> <FaTrashAlt></FaTrashAlt> </button>
                            </th>
                            <td>
                                <button className=" btn btn-xs border-none bg-lime-500 text-white text-end">Pay</button>
                            </td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;