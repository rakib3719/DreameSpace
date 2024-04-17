
import { Helmet } from "react-helmet-async";
import Banner from "../../component/banner/Banner";
import Cards from "../../component/card/Cards";




const Home = () => {
    

    return (
        <div>
            <Helmet>

                <title> Home </title>
            </Helmet>
           
    <Banner></Banner>
    <Cards></Cards>
        </div>
    );
};

export default Home;