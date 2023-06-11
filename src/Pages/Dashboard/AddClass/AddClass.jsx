import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, instructor,email,available_seats} = data;
                const newItem = {name, price: parseFloat(price), instructor, email,available_seats, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/classes', newItem)
                .then(data => {
                    console.log('after posting new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
        <div className="w-full px-10">
            <h2 className='text-center mt-8 mb-8 text-4xl text-cyan-700 font-bold'>Add Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                {/* Instructor info */}
                <div className="flex my-4">
                    <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor's Name</span>
                    </label>
                    <input type="text" 
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor's Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })}  className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Available available_seats*</span>
                    </label>
                    <input type="text" placeholder="Available available_seats"
                        {...register("available_seats", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                {/* class image */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>


                <input className="btn btn-sm text-white bg-cyan-600 hover:bg-cyan-700 mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;