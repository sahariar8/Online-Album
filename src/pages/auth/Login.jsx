import { Link } from "react-router-dom";
import SocialLogin from "../social/SocialLogin";



const Login = () => {
    const { createUser,userProfileUpdate } = useAuth();
        const { register,handleSubmit,formState: { errors } } = useForm();

        const onSubmit = (data)=>{
            console.log(data);
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
                <input type="password" placeholder="password" className="input input-bordered" {...register('image')} required />
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