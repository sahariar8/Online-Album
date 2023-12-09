
import { Link } from 'react-router-dom';
import gif from '../../public/images/404.gif'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={gif} alt="" />
            <Link to={'/'}><button className=' btn btn-outline btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default Error;