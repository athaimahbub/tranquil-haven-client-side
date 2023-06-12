import { useQuery } from "@tanstack/react-query";


const useManageClass = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-tranquil-haven-production.up.railway.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default useManageClass;