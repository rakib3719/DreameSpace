import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer/Footer";


const Root = () => {
    return (
<div>

<div  className="w-[90%] max-w-[1420px] mx-auto" >
            <Navbar></Navbar>
<Outlet></Outlet>

    

        </div>
        


<Footer  ></Footer>
</div>

    );
};

export default Root;