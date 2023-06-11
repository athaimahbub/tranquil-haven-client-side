import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsWalletFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi'
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useAdminInstructor from "../Hooks/useAdminInstructor";



const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isAdminInstructor =true;
    const [isAdminInstructor] = useAdminInstructor();
    // const {isAdmin,  isAdminInstructor,} = useAdmin();

    console.log(isAdminInstructor);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-cyan-50">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <h2 className='text-center mt-8 mb-2 text-2xl text-cyan-700 font-bold'>Tranquil Haven</h2><span className="ml-10 text-cyan-700 font-bold">........................................................</span>
                    <ul className="menu p-4 w-80 h-full  font-semibold  text-cyan-700">
                        {/* Sidebar content here */}
                        {isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/myhome">
                                        <AiFillHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers">
                                        <BsWalletFill />
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageClass">
                                        <FaCalendarAlt />
                                        Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addClass">
                                        <BsWalletFill />
                                        Add Class
                                    </NavLink>
                                </li>
                                <div className="divider"></div>

                                <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                                <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                                <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>

                            </>:
                             <>
                             <li>
                                 <NavLink to="/dashboard/myhome">
                                     <AiFillHome />
                                     Student Home
                                 </NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/mycart">
                                     <FiShoppingCart />
                                     My Selected Classes
                                     <span className="badge badge-secondary">
                                         +{cart?.length || 0}
                                     </span>
                                 </NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/enrolled">
                                     <RiShoppingCartFill />
                                     My Enrolled Classes
                                 </NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/history">
                                     <BsWalletFill />
                                     Payment History
                                 </NavLink>
                             </li>
                             <li>
                                 <NavLink to="/dashboard/schedule">
                                     <FaCalendarAlt />
                                     Course Schedule
                                 </NavLink>
                             </li>
                             <div className="divider"></div>

                             <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                             <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                             <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>
                         </>
                        
                        }


                        {isAdminInstructor && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/myhome">
                                        <AiFillHome />
                                        Instructor Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addClass">
                                        <BsWalletFill />
                                        Add Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/schedule">
                                        <FaCalendarAlt />
                                        My Classes
                                    </NavLink>
                                </li>
                                <div className="divider"></div>

                                <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                                <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                                <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>
                            </>
                        )
                        }
                        
                        




                        {/* { isAdmin ? <>
                             <li><NavLink to="/dashboard/myhome"><AiFillHome></AiFillHome>Admin Home</NavLink></li>
                             
                             <li><NavLink to="/dashboard/allusers"><BsWalletFill></BsWalletFill>Manage Users</NavLink></li>
                             <li><NavLink to="/dashboard/schedule"><FaCalendarAlt></FaCalendarAlt>Manage Classes</NavLink></li>
     
                             <div className="divider"></div>

                             <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                             <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                             <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>
                            </> :
                            <>
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
                            </>
                        }
                        {
                            
                        { isInstructor ?<>
                            <li><NavLink to="/dashboard/myhome"><AiFillHome></AiFillHome>Admin Home</NavLink></li>
                            
                            <li><NavLink to="/dashboard/allusers"><BsWalletFill></BsWalletFill>Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/schedule"><FaCalendarAlt></FaCalendarAlt>Manage Classes</NavLink></li>
    
                            <div className="divider"></div>

                            <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                            <li><NavLink to="/class"><SiGoogleclassroom></SiGoogleclassroom>Classes</NavLink></li>
                            <li><NavLink to="/instructors"><GiTeacher></GiTeacher>Instructors</NavLink></li>
                           </> :
                           <>
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
                           </>
                       }
                        } */}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;