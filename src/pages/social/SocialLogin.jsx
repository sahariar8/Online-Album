import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate  = useNavigate();
    const location = useLocation();
    
    const handleGoogle = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: "Good job!",
                text: "Registration Successfully Done",
                icon: "success"
              });
            navigate('/')

            const name = result.user.displayName;
            const email = result.user.email;
            const image = result.user.photoURL;

            const user = { name,email,image };
            axiosPublic.post('/users',user)
            .then(res=>{
                console.log(res.data);
            })

           
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
            <div className='divider'>or</div>
            <div className='btn btn-info w-full text-white'onClick={handleGoogle}><FcGoogle />Google</div>
        </div>
    );
};

export default SocialLogin;