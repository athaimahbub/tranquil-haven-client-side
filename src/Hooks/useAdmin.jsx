
// // import { useQuery } from "@tanstack/react-query";
// // import useAuth from "./useAuth";
// // import useAxiosSecure from "./useAxiosSecure";

// // const useAdmin = () => {
// //     const {user} = useAuth();
// //     const [axiosSecure] = useAxiosSecure();
// //     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
// //         queryKey: ['isAdmin', user?.email],
// //         queryFn: async () => {
// //             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
// //             console.log('is admin response', res)
// //             return res.data.admin;
// //         }
// //     });

// //     return [isAdmin, isAdminLoading]
// // }
// // export default useAdmin;

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
    
//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log('is admin response', res);
//             return res.data.admin;
//         }
//     });

//     // const { data: isAdminInstructor, isLoading: isAdminInstructorLoading } = useQuery({
//     //     queryKey: ['isAdminInstructor', user?.email],
//     //     queryFn: async () => {
//     //         const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//     //         console.log('is admin instructor response', res);
//     //         return res.data.isAdminInstructor;
//     //     }
//     // });

//     return {isAdmin, isAdminLoading, isAdminInstructor, isAdminInstructorLoading};
// };

// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;