import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserEdit, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const AllUser = () => {



    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://hello-summer-camp-server.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user =>{
        fetch(`https://hello-summer-camp-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin now !`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })

    }


   const handleMakeInstructor = user =>{
    fetch(`https://hello-summer-camp-server.vercel.app/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Instructor now !`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
    })

}




    const handleDelete = user =>{
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
                fetch(`https://hello-summer-camp-server.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Edutainment |Manage users</title>
            </Helmet>
            <SectionTitle
            subheading={'User  '}
            heading={'Management'}
            ></SectionTitle>

            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <div className="flex gap-3">
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-xs text-white"><FaUserShield></FaUserShield>Admin</button> 
                                        {user.role === 'instructor' ? 'instructor' :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-300 text-xs  text-black"><FaUserEdit></FaUserEdit> Instructor</button>
                                        }
                                    </div>
                                   
                                    
                                }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;