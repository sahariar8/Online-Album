
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-lg flex justify-center items-center"></span>
    }
    if(user){
        return children;
    }

    return <Navigate  to='/login' state={{from : location}} replace ></Navigate>
   
};

export default PrivateRoutes;