import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";


const Root = () => {
    return (
        <div  className="w-[90%] max-w-[1420px] mx-auto" >
            <Navbar></Navbar>
<Outlet></Outlet>

        </div>
    );
};

export default Root;