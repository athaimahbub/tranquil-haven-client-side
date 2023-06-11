import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdminInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdminInstructor, isLoading: isAdminInstructorLoading } = useQuery({
                queryKey: ['isAdminInstructor', user?.email],
                queryFn: async () => {
                    const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                    console.log('is admin instructor response', res);
                    return res.data.isAdminInstructor;
                }
            });
    return [isAdminInstructor, isAdminInstructorLoading]
};

export default useAdminInstructor;