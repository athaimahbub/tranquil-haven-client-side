import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUser, FaUsers } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { BiCoinStack } from 'react-icons/bi';

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className="w-full m-4 mt-0">
            <h2 className="text-3xl">Hi, {user.displayName}</h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                 
                        <ImStatsBars className="w-28 h-8 text-orange-500"></ImStatsBars>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                         <FaUser className='w-28 h-8 text-cyan-500'></FaUser>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                         <FaUsers className='w-28 h-8 text-cyan-500'></FaUsers>
                    </div>
                    <div className="stat-title">Classes</div>
                    <div className="stat-value">{stats.classes}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <BiCoinStack className="w-28 h-8 text-orange-500"></BiCoinStack>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    
                </div>

            </div>
            {/* <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div> */}
        </div>
    );
};

export default AdminHome;