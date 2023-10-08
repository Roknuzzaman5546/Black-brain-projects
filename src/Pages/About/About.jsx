import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'
import Aboutdetails from "./Aboutdetails";

const About = () => {
    const bands = useLoaderData()
    return (
        <div className=" w-11/12 mx-auto">
            <Navbar></Navbar>
            <h2 className=" text-4xl font-bold text-center font-Blackops my-2 italic">Our site all about here</h2>
            <h3 className=" text-2xl font-bold italic font-Blackops text-center pb-2 mb-5 mt-20  text-orange-400">We are work Here</h3>
            <div className=" grid md:grid-cols-2 grid-cols-1">
                
            <div data-aos="fade-left" className=' md:border-b-2 md:border-r-2 md:border-black p-4'>
                  <img className=' h-96' src={work1} alt="" />
                    <h2 className=' text-xl font-bold'>We are also worked Birthday party</h2>
                    <p>Fee: 4000$</p>
                </div>
                <div data-aos="fade-right" className=' md:border-b-2 md:border-black p-4'>
                    <img className=' h-96' src={work2} alt="" />
                    <h2 className=' text-xl font-bold'>
                        We arrange weeding creemony
                    </h2>
                    <p>Fee: 3050$</p>
                </div>
                <div data-aos="fade-left" className=' md:border-r-2 md:border-black p-4'>
                    <img className=' h-96' src={work3} alt="" />
                    <h2 className=' text-xl font-bold'>Our Bands worked seminar</h2>
                    <p>Fee: 1080$</p>
                </div>
                <div data-aos="fade-right" className=' md:border-black p-4'>
                    <img className=' h-96' src={work4} alt="" />
                    <h2 className=' text-xl font-bold'>
                        Big conchert is we are worked
                    </h2>
                    <p>Fee: 4220$</p>
                </div>
            </div>
            <h2 className=" text-3xl font-bold font-Blackops my-10 text-center">Our bands group & Singer</h2>
            {
                bands.map(band => <Aboutdetails key={band.id} band={band}></Aboutdetails>)
            }
            <h3 className=" text-2xl text-center italic font-bold text-orange-700">We do work very vary carefully,We arranged music festival by maintaining order if You Heir Us Go to <Link to='/book' className=" font-Blackops text-black rounded-sm"> Book</Link> page</h3>
        </div>
    );
};

export default About;