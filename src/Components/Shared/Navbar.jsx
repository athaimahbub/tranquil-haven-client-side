import { Link } from 'react-router-dom';
import logo from '../../assets/tranquileHaven.jpg'

const Navbar = () => {

    const HeaderItems = <>
        <li className='text-cyan-600 font-bold'><Link to="/">Home</Link></li>
        <li className='text-cyan-600 font-bold'><Link to="/blogs">Instructors</Link></li>
        <li className='text-cyan-600 font-bold'><Link to="/blogs">Classes</Link></li>
        <li className='text-cyan-600 font-bold'><Link to="/blogs">Dashboard</Link></li>


    </>
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {HeaderItems}
                        </ul>
                    </div>
                    
                    <img src={logo}></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {HeaderItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* {user ? <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} title={user.displayName} />
                            </div>
                        </label>
                        <Link to='/' className="btn btn-sm btn-primary text-white" onClick={handleLogOut}>Logout</Link>
                    </> : <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <UserIcon className="h-10 w-8 text-gray-500" />
                            </div>
                        </label>
                    } */}

                        <Link to='/login' className="btn btn-sm bg-cyan-600 text-white">Login</Link>
                    </div>
                </div>
            </div>
            );
};

            export default Navbar;