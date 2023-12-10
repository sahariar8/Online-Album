import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../social/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
        const { createUser,userProfileUpdate } = useAuth();
        const { register,handleSubmit,formState: { errors } } = useForm();
        const axiosPublic  = useAxiosPublic();
        const navigate = useNavigate();


        const onSubmit = async (data)=>{
            console.log(data);
            const imagefile = { image:data.image[0] } ;
            console.log(imagefile);
            const res = await axiosPublic.post(image_hosting_api,imagefile,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data.data);
            const name = data.name;
            const email = data.email;
            const password = data.password;
            const image = res.data.data.display_url;

           if(res.data.success){
            const user = { name,email,image };
            createUser(email,password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Registration SuccessFully Done!",
                    icon: "success"
                  });
                  navigate('/login');

                  userProfileUpdate(name,image)
                  .then(()=>{
                    console.log('profile updated');
                    axiosPublic.post('/users',user)
                    .then(res=>{
                        console.log(res.data)
                    })
                  })
                  .catch(error=>{
                    console.log(error.message)
                  })
            })
            .catch(error=>{
                console.log(error.messag);
            })
           }
            
        }

  return (
    <div className="hero md:min-h-screen max-w-screen-xl mx-auto bg-slate-50">
    <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
    <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
      <img src={'/public/images/authentication.gif'} alt="" />
    </div>
      <div className="card w-full md:w-1/2 md:mx-10 p-5 shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold md:text-5xl text-blue-600 text-center">Registration Now</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered" {...register('name')} required />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
             
            </label>
            <input type="email" placeholder="email" className="input input-bordered" {...register('email')} required/>
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered"
            {...register("password", {
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/}
                )} required />
               
                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must be six Charecter</span>}
                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must be One UpperCase,one numeric number and One Special Charecter</span>
                }
          </div>
          <div className="form-control">
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('image')} required />
         
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
