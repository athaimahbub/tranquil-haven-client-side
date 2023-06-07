import { Link } from 'react-router-dom';
import loginImage from '../assets/authentication.gif'
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-cyan-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-4 text-cyan-700">Login now!</h1>
                        
                           
                            <img src={loginImage} className='rounded-2xl px-4'></img>
                            
                        
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-700 text-white">Login</button>
                            </div>
                            <div className="divider"></div>
                                <button className=" bg-base-300  btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 488 512" className='fill-blue-600'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                                    Login with Google</button>

                                <p>Are you new in our site?Do <Link to='/registration' className='text-cyan-600 font-bold'>Registration</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;