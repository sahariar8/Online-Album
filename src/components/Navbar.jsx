import { NavLink } from "react-router-dom";
import logo from '../../public/images/camera.png'
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user }  = useAuth();
  console.log(user);
  const item = (
    <div className="flex gap-5">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
      
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
          //comming soon
        }
      </div>
    </div>
  );
};

export default Navbar;
