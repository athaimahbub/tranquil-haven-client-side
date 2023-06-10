import { useQuery } from '@tanstack/react-query';
import { RiDeleteBinFill} from 'react-icons/ri';
import {FaUserShield, FaUserTie } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json();
    // })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    const handleMakeInstructor = () => {

    }

    const handleDelete = () =>{

    }

    return (
        <div className='w-full'>
            <h2 className='text-3xl text-center text-cyan-600 font-semibold my-4'>Total Users: {users.length}</h2>

            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
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
                                <td>
                                    {
                                     user.role === 'instructor' ? 'Instructor' : 

                                     <button onClick={() => handleMakeInstructor(user)} className="btn btn-sm bg-cyan-600 hover:bg-cyan-700 text-white"><FaUserTie></FaUserTie></button>
                                    }
                                </td>
                                <td>
                                    {
                                     user.role === 'admin' ? 'Admin' : 

                                     <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-cyan-600 hover:bg-cyan-700 text-white"><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                <button onClick={() => handleDelete(user)} className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"><RiDeleteBinFill></RiDeleteBinFill></button>
                                </td>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default AllUsers;