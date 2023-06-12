import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useManageClass from '../../Hooks/useManageClass';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const ManageClass = () => {
    const [classes, , refetch] = useManageClass();
    const [axiosSecure] = useAxiosSecure();

    const [handleClass, setClasses] = useState([]);
    const handleApprove = item => {
        const updatedClasses = [handleClass];
        const index = updatedClasses.findIndex(classItem => classItem._id === item._id);
        if (index !== -1) {
            updatedClasses[index].status = 'Approved';
            setClasses(updatedClasses);
        }
    };

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to deny?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Denied!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/classes/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            // refetch();
                            Swal.fire(
                                'Denied!',
                                'Instructor class has been denied',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
            <h2 className='text-center mt-8 mb-8 text-4xl text-cyan-700 font-bold'>Manage Classes</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th></th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Available_Seat</th>
                            
                            <th>Status</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {/* <div className="flex items-center space-x-3"> */}
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        {/* </div> */}
                                        {/* <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div> */}
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.available_seats}
                                </td>
                                <td>Pending</td>
                                <td >${item.price}</td>
                                <td>
                                
                                <button onClick={() => handleApprove(item)} className="btn btn-ghost btn-sm bg-green-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 btn-sm text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                <button className="btn btn-sm btn-ghost bg-blue-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;