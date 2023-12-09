import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div className="max-w-screen-xl mx-auto">
            {
                isLogin || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                isLogin || <Footer></Footer>
            }
        </div>
    );
};

export default Layout;