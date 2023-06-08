import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../assets/authentication.gif'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
    
  const onSubmit = data => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
    });

    reset();
}

const handleGoogleSignIn = () => {
    // Handle Google Sign-in
    signInWithPopup(auth, provider)
    .then(result => {
        const user =result.user;
        console.log(user);
        navigate(from, {replace: true});
    })
    .then(error => console.log('Error: ', error))
  };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-cyan-50">
                <div className="hero-content flex-col lg:flex-row-reverse py-">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <label className="label ">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="form-control">

                                <div className="relative">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        {...register("password", { 
                                            required: true,
                                            pattern: {
                                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                                message:
                                                  'Password must be Minimum 6 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character',
                                              },
                                             })} placeholder="password"
                                        className="input input-bordered w-full"
                                    />
                                    {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                                    <div
                                        className=" absolute top-4 right-4  cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >

                                        {passwordVisible ?

                                            <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                        }

                                    </div>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               
                                <button className="hover:bg-cyan-700  font-bold py-2 px-4 rounded bg-cyan-600 text-white">Login</button>
                            </div>
                            <div className="divider"></div>

                            <div className="form-control">
                                <button className=" bg-base-300  btn " onClick={handleGoogleSignIn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 488 512" className='fill-blue-600'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                    Login with Google</button>
                            </div>
                        </form>

                            <p>Are you new in our site?Do <Link to='/registration' className='text-cyan-600 font-bold'>Registration</Link></p>

                        </div>
                    </div>

                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-4 text-cyan-700">Login now!</h1>


                        <img src={loginImage} className='rounded-2xl px-4'></img>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;