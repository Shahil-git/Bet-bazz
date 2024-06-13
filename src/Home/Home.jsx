
import Nab from "../Components/Nabver/Nab";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import wave from "../../src/assets/wave.svg"

const Home = () => {
    return (
        < div className="h-full ">
            <Nab></Nab>
         
            <div className="pt-16 ">
            <Hero></Hero>
            <img className="w-full" src={wave} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;