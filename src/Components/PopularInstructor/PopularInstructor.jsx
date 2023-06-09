import React from 'react';
 import useInstructor from '../../Hooks/useInstructor';
import Instructors from '../../Pages/Instructors';

const PopularInstructor = () => {
    const [instructors] =useInstructor();
    const sortedInstructors = instructors.sort(
        (a, b) => b.classes.length - a.classes.length
      );
    
      // Get the top 6 instructors
      const topInstructors = sortedInstructors.slice(0, 6);
    
      return (
        <div>
          <h2>Popular Instructors</h2>
          {topInstructors.map(instructor => (
            <div key={instructor.email}>
              <img src={instructor.image} alt={instructor.name} />
              <h3>{instructor.name}</h3>
              <p>Email: {instructor.email}</p>
              <p>Student Number: {instructor.student_number}</p>
              <p>Classes: {instructor.classes.join(', ')}</p>
            </div>
          ))}
        </div>
    );
};

export default PopularInstructor;