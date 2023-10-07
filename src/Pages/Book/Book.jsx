import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'
import Bookdetails from './Bookdetails';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdSms } from "react-icons/md";

const Book = () => {
    const bands = useLoaderData();

    return (
        <div className=' w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className=' mt-10'>
                <div className="carousel h-96 w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={work1} className="w-full relative opacity-30" />
                        <h2 className=" text-3xl font-bold absolute lg:top-60 md:top-52 font-Blackops top-36 lg:left-96 md:left-56 left-4 italic text-center"><span className=" text-sky-800">Entertainment</span> ekhanei !!<br />Black bran <br /> Heir Your favouirt singer</h2>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={work2} className="w-full relative opacity-40" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={work3} className="w-full relative opacity-40" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={work4} className="w-full relative opacity-40" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <h2 className=' text-center font-Blackops font-bold text-3xl mt-10 text-purple-500'><span className=' text-orange-400'>Booking conchert by</span> <br /> your favouirt band <span className=' text-black'>or</span> singer !!</h2>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                {
                    bands.map(band => <Bookdetails key={band.id} band={band}></Bookdetails>)
                }
            </div>
                <h2 className=' text-3xl font-Blackops font-bold text-orange-500 text-center my-10'>Contact us for Booking program</h2>
            <div className=' grid md:grid-cols-3 grid-cols-2 gap-7 w-9/12 mx-auto'>
                <div className=''>
                    <h2 className=' flex gap-2 items-center text-2xl font-bold btn btn-outline btn-primary'><BiSolidPhoneCall></BiSolidPhoneCall> Call us</h2>
                    <h2 className=' flex gap-2 items-center text-2xl my-2 font-bold btn btn-outline btn-error'><MdSms></MdSms> Send sms</h2>
                </div>
                <div>
                    <h2 className=' flex gap-2 items-center text-2xl font-bold btn btn-outline btn-primary'><BsTwitter></BsTwitter> Twitter</h2>
                    <h2 className=' flex gap-2 items-center text-2xl my-2 font-bold btn btn-outline btn-info'><BsLinkedin></BsLinkedin> Linkedin</h2>
                </div>
                <div>
                    <h2 className=' flex gap-2 items-center text-2xl font-bold btn btn-outline btn-primary'><BsFacebook></BsFacebook> Facebook</h2>
                    <h2 className=' flex gap-2 items-center text-2xl my-2 font-bold btn btn-outline btn-error'><BsInstagram></BsInstagram> Instagram</h2>
                </div>
            </div>
        </div>
    );
};

export default Book;