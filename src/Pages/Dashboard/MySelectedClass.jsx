import React from 'react';
import useCart from '../../Hooks/useCart';
import {RiDeleteBinFill} from 'react-icons/ri';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Your selected class will be removed",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your selected class has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className='w-full'>
            <h2 className='text-center  mb-8 text-4xl text-cyan-700 font-bold'>My Selected Classes</h2>
            <div className='flex justify-evenly mb-6'>
                <h3 className='text-2xl font-semibold text-cyan-600'>Total Selected Classes: {cart.length}</h3>
                <h3 className='text-2xl font-semibold text-cyan-600'>Total Price: ${total}</h3>
                <button className='btn btn-warning btn-sm font-bold text-white'>Pay</button>
            </div>

            <div className="overflow-x-auto text-slate-600">
                <table className="table ">
                    {/* head */}
                    <thead className='text-xl text-cyan-600'>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* item 1 */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                            <td>{index + 1}</td>
                                
                            
                            <td>
                                <div className="flex items-center space-x-3 ">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.instructor}
                            </td>
                            <td className='text-end'>${item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"><RiDeleteBinFill></RiDeleteBinFill></button>
                            </th>
                        </tr>)
                        }
                        
                        
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;