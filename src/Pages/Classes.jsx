import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Classes = () => {
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
                            {/* <button className="btn btn-[#00bcd4]">See Classes</button> */}
                            <Link to='/class' className="btn btn-sm hover:bg-cyan-700  bg-cyan-600 text-white">Select</Link>
                        </div>

                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Classes;