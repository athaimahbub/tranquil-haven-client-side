import image from '../assets/404Page.avif'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='container mx-96 my-32' >
            <div className="card w-96 bg-base-100 shadow-xl">
            
                <div className="card-body">
                <h2 className="card-title text-2xl text-red-600 font-bold">404 - Page Not Found !!</h2>
                <img src={image} alt='The page you are looking for does not exist'></img>
    
                </div>
                <Link to='/' className="btn btn-sm btn-primary text-white mb-8">Back to Home</Link>

            </div>
        </div>
    );
};

export default NotFoundPage;