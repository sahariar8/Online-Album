import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const auth  = useAuth();
    console.log(auth);
    const handleGoogle = ()=>{

    }
    return (
        <div>
            <div className='divider'>or</div>
            <div className='btn btn-info w-full text-white'onClick={handleGoogle}><FcGoogle />Google</div>
        </div>
    );
};

export default SocialLogin;