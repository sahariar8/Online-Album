import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../social/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";



const Login = () => {
        const { userLogin } = useAuth();
        const [error,setError] = useState();
        const { register,handleSubmit} = useForm();
        const location = useLocation();
        console.log(location);
        const from = location.state?.from?.pathname || "/";
        const navigate = useNavigate();

        const onSubmit = (data)=>{
            console.log(data);
            userLogin(data.email,data.password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "SuccessFully Logged In!",
                    icon: "success"
                  });
                  navigate(from,{replace:true})
            })
            .catch(error=>{
                console.log(error.message);
                setError(error.message);
            })
           
        }
    


    return (
        <div className="hero md:min-h-screen max-w-screen-xl mx-auto bg-slate-50">
        <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
        <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
          <img src={'/public/images/authentication.gif'} alt="" />
        </div>
          <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold text-3xl md:text-5xl text-blue-600 text-center">Login Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register('email')} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register('password')} required />
                <h1 className="font-bold text-red-600">{error}</h1>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
                <div className="flex justify-between pt-2">
                    <h1>Haven't any account yet?</h1>
                    <Link to={'/register'}><h2 className="font-bold text-primary">Register</h2></Link>
                </div>
              </div>
            </form>
            <div className="md:px-8 mb-10">
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;