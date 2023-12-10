import { Link } from "react-router-dom";
import SocialLogin from "../social/SocialLogin";

const Register = () => {


  return (
    <div className="hero md:min-h-screen max-w-screen-xl mx-auto bg-slate-50">
    <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
    <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
      <img src={'/public/images/authentication.gif'} alt="" />
    </div>
      <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
        <form className="card-body">
            <h1 className="font-bold md:text-5xl text-blue-600 text-center">Registration Now</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">Register</button>
            <div className="flex justify-between pt-2">
                    <h1>Allready Have an Account?</h1>
                    <Link to={'/login'}><h2 className="font-bold text-primary">Login</h2></Link>
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

export default Register;
