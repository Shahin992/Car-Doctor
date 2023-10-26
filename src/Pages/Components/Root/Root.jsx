import { Outlet } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto space-y-10">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
            
            
        </div>
    );
};

export default Root;