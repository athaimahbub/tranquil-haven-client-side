import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/useCart';


const Classes = () => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [allClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(response => response.json())
            .then(data => {
                setClasses(data)
                // setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    const handleAddToCart = everyClass => {
        console.log(everyClass);
        const { _id: courseId, image, name, instructor, price, available_seats } = everyClass;

        if (user && user.email) {
            const selectClass = { courseId, image, name, instructor, price, available_seats, email: user.email };

            // New Added=========================================
            // if (user.role === 'admin' || user.role === 'instructor') {
            //     Swal.fire({
            //         title: 'Cannot Select',
            //         text: 'You are logged in as admin/instructor',
            //         icon: 'error',
            //         confirmButtonText: 'OK',
            //     });
            //     return;
            // }
            // ======================================

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //fetch update value
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {

                        Swal.fire({
                            title: 'Please Login first',
                            text: "You won't be able to select class before Login!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login'
                        }).then((result) => {
                            if (result.isConfirmed) {

                                navigate('/login', { state: { from: location } })

                            }
                        })
                    }

                })
        }
    }

    return (

        <div>
            <h2 className='text-center mt-8 mb-8 text-4xl text-cyan-700 font-bold'>Our Courses</h2>

            <div className='grid md:grid-cols-3 gap-4'>

                {allClasses.map(instructor => (

                    <div key={instructor._id} className="card w-96 bg-cyan-50 shadow-xl">
                        <figure><img className="w-full" src={instructor.image} alt={instructor.name} /></figure>

                        <div className="card-body items-center text-center text-slate-600">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p><span className='font-bold'>Instructor:</span> {instructor.instructor}</p>
                            <p><span className='font-bold'>Price:</span> {instructor.price}</p>
                            <p><span className='font-bold'>Available seat:</span> {instructor.available_seats}</p>

                            <div className="card-actions">
                                
                                {user ? 
                                   <button  onClick={() => handleAddToCart(instructor)} className="btn btn-sm hover:bg-cyan-700  bg-cyan-600 text-white">Select</button> : <Link to='/login' className="btn btn-sm hover:bg-cyan-700  bg-cyan-600 text-white">Select</Link>
                                }
                                
                            </div>

                            

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Classes;