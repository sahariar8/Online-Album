
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src='/images/404.gif' alt="" />
            <Link to={'/'}><button className=' btn btn-outline btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default Error;