import { Helmet } from "react-helmet-async";


import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useSelectedClass from "../../../CustomHooks/useSelectedClass";



const SelectedClasses = () => {
    const [selectedClass, refetch] = useSelectedClass();
    console.log(selectedClass);
    const total = selectedClass.reduce((sum,item) => item.price + sum,0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hello-summer-camp-server.vercel.app/selectedClasses/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
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
                <h1> Total Fees : $ {total}</h1>

            </div>
            <div className="overflow-x-auto ">
                <table className=" table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>Fee</th>
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