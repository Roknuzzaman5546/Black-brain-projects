import Navbar from "../Navbar/Navbar";
import logo from '../assets/logo7.jpg'
const Banner = () => {
    return (
        <div>
            <img className=" relative lg:3/4 md:h-96 h-80 lg:w-screen md:w-screen opacity-30" src={logo} alt="" />
            <div className=" absolute top-1 w-full">
                <Navbar></Navbar>
            </div>
            <div>
                <h2 className=" text-4xl font-bold absolute lg:top-48 md:top-52 font-Blackops top-36 lg:left-80 md:left-56 left-4 italic text-center"><span className=" text-orange-600">Entertainment</span> ekhanei !!<br />Black bran</h2>
            </div>
        </div>
    );
};

export default Banner;