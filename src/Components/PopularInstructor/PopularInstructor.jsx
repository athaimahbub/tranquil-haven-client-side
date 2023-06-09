import { useEffect, useState } from "react";



const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  
  
    useEffect(() => {
      fetch('http://localhost:5000/instructors')
        .then(response => response.json())
        .then(data => {
          setInstructors(data)
         
        })
        .catch(error => console.log(error));
    }, []);
    
    let topInstructors = [];

  if (instructors && instructors.length > 0) {
    // console.log(instructors.length)
    // Sort instructors by the student_number property in descending order
    const sortedInstructors = [...instructors].sort(
      (a, b) => b.student_number - a.student_number
    );
    // Get the top 6 instructors
    topInstructors = sortedInstructors.slice(0, 6);
    console.log(topInstructors)
  }
    
      return (
        <div>
          <h2 className='text-center mt-8 mb-4 text-4xl text-cyan-700 font-bold'>Our Popular Instructors</h2>
        
        <div className='grid md:grid-cols-3 gap-4'>
          
          {topInstructors.map(instructor => (
            
            <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-52 rounded-full">
                                <img src={instructor.image} alt={instructor.name}  />
                            </div>
                           
                        </div>
                    </figure>
                    <div className="card-body items-center text-center text-slate-600">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p><span className='font-bold'>Email:</span> {instructor.email}</p>
                        <p><span className='font-bold'>Classes:</span> {instructor.classes.join(', ')}</p>
                        <p><span className='font-bold'>Total students:</span> {instructor.student_number}</p>
                        
                        
                    </div>
                </div>
          ))}
        </div>
        </div>
        
    );
};

export default PopularInstructor;