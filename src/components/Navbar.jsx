import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '/images/camera.png'
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
  const { user,logOut }  = useAuth();
  const navigate = useNavigate();

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      console.log('logout');
      Swal.fire({
        title: "Good job!",
        text: "Successfully Logged Out",
        icon: "Success"
      });
      navigate('/login');
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
  const item = (
    <div className="flex gap-5 font-bold">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/add-image'}>Add Image</NavLink></li>
      <li><NavLink to={'/all-image'}>All Image</NavLink></li>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {item}
          </ul>
        </div>
        <img src={logo} alt="" className="h-[40px] w-[60px]" />
        <h1 className="font-bold text-slate-900 font-serif">Candy<span className="text-red-600 font-bold font-sans">Snap</span> </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{item}</ul>
      </div>
      <div className="navbar-end">
      {
        user ? 
          <div className="flex items-center">
           
           <div className="avatar online">
              <div className="w-8 md:w-12 rounded-full">
                <Link to='/profile'><img src={user?.photoURL}/></Link>
              </div>
            </div>
          
            
            <h1 className="btn btn-sm normal-case btn-neutral ml-2 mr-5 text-base font-semibold" onClick={handleLogOut}>LogOut</h1>
            
          </div>
         : 
          <>
          <Link to="/login">LogIn</Link>
          </>
        
    }
      </div>
    </div>
  );
};

export default Navbar;
