import Navbar from "../Navbar/Navbar";
import logo from '../assets/logo7.jpg'
const Banner = () => {
    return (
        <div>
            <img className=" relative lg:h-screen md:h-96 h-80 lg:w-screen md:w-screen opacity-30" src={logo} alt="" />
            <div className=" absolute top-1 w-full">
                <Navbar></Navbar>
            </div>
            <div>
                <h2 className=" text-3xl font-bold absolute lg:top-60 md:top-52 font-Blackops top-36 lg:left-96 md:left-56 left-4 italic text-center"><span className=" text-orange-600">Entertainment</span> ekhanei !!<br />Black bran</h2>
            </div>
        </div>
    );
};

export default Banner;