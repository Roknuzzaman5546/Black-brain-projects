import Navbar from "../Navbar/Navbar";
import logo from '../assets/logo4.jpg'
const Banner = () => {
    return (
        <div>
            <img className=" relative md:h-screen md:w-screen opacity-30" src={logo} alt="" />
            <div className=" absolute top-1 w-full">
                <Navbar></Navbar>
            </div>
            <div>
                <h2 className=" text-3xl font-bold absolute md:top-60 font-Blackops top-36 md:left-96 left-4 italic text-center"><span className=" text-blue-700">Entertainment</span> ekhanei !!<br />Cantact us</h2>
            </div>
        </div>
    );
};

export default Banner;