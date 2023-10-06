import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";

const Home = () => {
    const Bands = useLoaderData()
    return (
        <div className="">
            <Banner></Banner>
            <section className=" text-center my-16 w-11/12 mx-auto">
                <h4 className=" italic font-Dancing">Welcome to the</h4>
                <h3 className=" text-4xl font-bold text-orange-300 font-Blackops">Black bran</h3>
                <p className=" text-sm italic">Black bran is the most fastival website in bangladesh.It is first online website <br />for booking conchert and family program!! It is the  most Popular and granded by govt.. We are <br />arranged  conchet any place in bangladesh</p>
            </section>
            <section className=" mt-10 w-11/12 mx-auto">
                <h3 className="text-3xl font-bold text-center text-orange-500 mb-5">Our services</h3>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {
                        Bands.map(band => <Service key={band.id} band={band}></Service>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;