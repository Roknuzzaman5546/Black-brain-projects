import { useEffect } from 'react';
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import Aos from 'aos';

const Works = () => {

    useEffect(() =>{
        Aos.init({
            duration: 500,
            offset: 200
        })
    },[]);

    return (
        <div className='Works'>
            <h3 data-aos="fade-up" className=" text-2xl font-bold italic font-Blackops text-center pb-2 mb-5 mt-20  text-orange-400">We work on such events</h3>
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

        </div>
    );
};

export default Works;