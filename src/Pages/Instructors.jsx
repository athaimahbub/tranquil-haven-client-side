import React from 'react';
import useInstructor from '../Hooks/useInstructor';
import { Link } from 'react-router-dom';


const Instructor = () => {
    const instructors = useInstructor();

    return (
        <div className='grid md:grid-cols-3 gap-4'>

            {instructors.map(instructor => (
                // <div key={instructor._id}>
                //   <img src={instructor.image} alt={instructor.name} />
                //   <h3>{instructor.name}</h3>
                //   <p>Email: {instructor.email}</p>
                //   <p>Student Number: {instructor.student_number}</p>
                //   <p>Classes: {instructor.classes.join(', ')}</p>
                // </div>

                <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-52 rounded-full">
                                <img src={instructor.image} alt={instructor.name}  />
                            </div>
                            {/* <img src={instructor.image} alt={instructor.name} className="rounded-xl" /> */}
                        </div>
                    </figure>
                    <div className="card-body items-center text-center text-slate-600">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p><span className='font-bold'>Email:</span> {instructor.email}</p>
                        <p><span className='font-bold'>Classes:</span> {instructor.classes.join(', ')}</p>
                        <p><span className='font-bold'>Total taken Classes:</span> {instructor.classes_taken}</p>
                        
                        <div className="card-actions">
                            {/* <button className="btn btn-[#00bcd4]">See Classes</button> */}
                            <Link to='/recordClass' className="btn btn-sm hover:bg-cyan-700  bg-cyan-600 text-white">See Classes</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Instructor;
