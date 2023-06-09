import { useState, useEffect } from 'react';



const useInstructor = () => {
  const [instructors, setInstructors] = useState([]);
//   const[loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then(response => response.json())
      .then(data => {
        setInstructors(data)
        // setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

   return instructors;

//   return [instructors, loading];
};

export default useInstructor;

// const useInstructor = () => {
//     // const [instructor, setInstructor] = useState([]);
//     // const[loading, setLoading] = useState(true);
//     // useEffect(() => {
//     //     fetch('http://localhost:5000/instructors')
//     //     .then(res => res.json())
//     //     .then(data => {
            
//     //         // console.log(data)
//     //         setInstructor(data);
//     //         setLoading(false);
//     //     });

//     // }, []);

//     // useEffect(() => {
//     //     console.log(instructor); // Log the instructor array
//     // }, [instructor]);

//     return [instructor, loading];
// };

// export default useInstructor;
