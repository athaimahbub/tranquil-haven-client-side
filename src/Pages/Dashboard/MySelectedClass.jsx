import React from 'react';
import useCart from '../../Hooks/useCart';
import {RiDeleteBinFill} from 'react-icons/ri';

const MySelectedClass = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <h1>Dashbord..........</h1>

            <div className='flex justify-evenly'>
                <h3 className='text-2xl font-semibold'>Total Selected Classes: {cart.length}</h3>
                <h3 className='text-2xl font-semibold'>Total Price: ${total}</h3>
                <button className='btn btn-warning btn-sm font-bold text-white'>Pay</button>
            </div>

            <div className="overflow-x-auto text-cyan-600">
                <table className="table ">
                    {/* head */}
                    <thead className='text-xl text-cyan-700'>
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
                                <button className="btn btn-sm bg-red-600 text-white"><RiDeleteBinFill></RiDeleteBinFill></button>
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