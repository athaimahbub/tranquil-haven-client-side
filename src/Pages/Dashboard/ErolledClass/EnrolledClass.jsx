import useCart from '../../../Hooks/useCart';


const EnrolledClass = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
   
    
    return (
        <div className='w-full'>
            <h2 className='text-center  mb-8 text-4xl text-cyan-700 font-bold'>My Enrolled Classes</h2>
            
    
            <div className="overflow-x-auto text-slate-600">
                <table className="table ">
                    {/* head */}
                    <thead className='text-xl text-cyan-600'>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th></th>
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
                            
                        </tr>)
                        }
                        
                        
                        
                    </tbody>
    
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;