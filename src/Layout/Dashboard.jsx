import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsWalletFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi'
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-cyan-50 font-semibold  text-cyan-700">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/myhome"><AiFillHome></AiFillHome>User Home</NavLink></li>
                        <li><NavLink to="/dashboard/mycart"><FiShoppingCart>
                        </FiShoppingCart>
                            My Selected Classes
                            <span className="badge badge-secondary">
                                +{cart?.length || 0}
                            </span>
                        </NavLink>
                        </li>
                        <li><NavLink to="/dashboard/enrolled"><RiShoppingCartFill></RiShoppingCartFill>My Enrolled Classes</NavLink></li>
                        <li><NavLink to="/dashboard/history"><BsWalletFill></BsWalletFill>Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/schedule"><FaCalendarAlt></FaCalendarAlt>Course Schedule</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                        <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                        <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;