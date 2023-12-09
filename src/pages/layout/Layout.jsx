import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-red-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;