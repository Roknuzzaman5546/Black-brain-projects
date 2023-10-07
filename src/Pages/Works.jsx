import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'

const Works = () => {
    return (
        <div>
            <h3 className=" text-2xl font-bold italic font-Blackops text-center pb-2 mb-5 mt-20  text-orange-400">We work on such events</h3>
            <div className=" grid md:grid-cols-2 grid-cols-1">
                <div className=' border-b-2 border-r-2 border-black p-4'>
                    <img className=' h-96' src={work1} alt="" />
                    <h2 className=' text-xl font-bold'>We arrange weeding creemony</h2>
                    <p>Fee: 4000$</p>
                </div>
                <div className=' border-b-2 border-black p-4'>
                    <img className=' h-96' src={work2} alt="" />
                    <h2 className=' text-xl font-bold'>Big conchert is we are worked</h2>
                    <p>Fee: 3050$</p>
                </div>
                <div className=' border-r-2 border-black p-4'>
                    <img className=' h-96' src={work3} alt="" />
                    <h2 className=' text-xl font-bold'>Our Bands worked seminar</h2>
                    <p>Fee: 1080$</p>
                </div>
                <div className=' border-black p-4'>
                    <img className=' h-96' src={work4} alt="" />
                    <h2 className=' text-xl font-bold'>We are also worked Birthday party</h2>
                    <p>Fee: 4220$</p>
                </div>
            </div>

        </div>
    );
};

export default Works;