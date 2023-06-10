import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Registration = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser);

            updateUserProfile(data.name, data.photo)
            .then(() => {
                const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
            .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                        });
                        navigate('/');
                    }
                })
            })
            .catch(error => console.log(error))
        })
   
    };

    const validatePasswordMatch = (value) => {
        const password = watch('password');
        return value === password || 'Passwords do not match';
      };

    return (
        <div className="bg-cyan-50 py-8">
             <h1 className="text-3xl text-center font-bold mb-4 text-cyan-700">Welcome to Registration!</h1>
            <div className="mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            pattern: {
                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                message:
                                    'Password must be Minimum 6 characters,contain at least one uppercase letter, one lowercase letter, one number and one special character',
                            },
                        })} placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>

                        <input
                            type="password"
                            
                            {...register("confirmPassword",{
                                required: 'Confirm Password is required',
                                validate: validatePasswordMatch,
                            })}
                            placeholder="Confirm Password"
                            className="input input-bordered"
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-600">{errors.confirmPassword.message}</span>
                        )}

                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} placeholder="photo URL" className="input input-bordered" />
                        {errors.photo && <span className="text-red-600">Photo URL is required</span>}

                        <label className="label">
                            <span className="label-text"> Phone Number</span>
                        </label>
                        <input type="tel" {...register("phoneNumber")} placeholder=" Phone Number" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className=" hover:bg-cyan-700  font-bold py-2 px-4 rounded bg-cyan-600 text-white">Registration</button>
                    </div>
                    <div className="divider"></div>
                    

                    <p className="text-center">Already have an account? <Link to='/login' className='text-cyan-600 font-bold'>Login</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Registration;