import Navbar from '../../Navbar/Navbar';
import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'

const Book = () => {
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
        </div>
    );
};

export default Book;