
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
        return <span className="loading loading-dots loading-lg flex justify-center items-center"></span>
    }
    

    return <Navigate  to='/login' state={{from : location}} replace ></Navigate>
   
};

export default PrivateRoutes;