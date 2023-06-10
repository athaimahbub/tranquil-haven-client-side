import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(response => response.json())
            .then(data => {
                setClasses(data)

            })
            .catch(error => console.log(error));
    }, []);

    let popularClasses = [];

    if (classes && classes.length > 0) {
        // console.log(instructors.length)
        // Sort instructors by the student_number property in descending order
        const sortedInstructors = [...classes].sort(
            (a, b) => b.student_number - a.student_number
        );
        // Get the top 6 instructors
        popularClasses = sortedInstructors.slice(0, 6);
        // console.log(popularClasses)
    }

    return (
        <div>
            <h2 className='text-center mt-12 mb-8 text-4xl text-cyan-700 font-bold'>Our Popular Course</h2>

            <div className='grid md:grid-cols-3 gap-4'>

                {popularClasses.map(instructor => (

                    <div key={instructor._id} className="card w-96 bg-cyan-50 shadow-xl">
                        <figure><img className="w-full" src={instructor.image} alt={instructor.name} /></figure>

                        <div className="card-body items-center text-center text-slate-600">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p><span className='font-bold'>Instructor:</span> {instructor.instructor}</p>
                            <p><span className='font-bold'>Price:</span> {instructor.price}</p>
                            <p><span className='font-bold'>Available seat:</span> {instructor.available_seats}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link to='/class' className="btn btn-sm hover:bg-cyan-700  bg-cyan-600 text-white">See All</Link>
            </div>
        </div>

    );
};

export default PopularClasses;