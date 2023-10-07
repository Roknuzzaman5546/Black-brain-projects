import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

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
                <h3 className="text-3xl font-bold text-center text-orange-500 mb-5 italic">Our services</h3>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {
                        Bands.map(band => <Service key={band.id} band={band}></Service>)
                    }
                </div>
            </section>
            <footer className="mt-10 bg-black">
                <footer className="footer p-10  text-white w-11/12 mx-auto">
                    <aside>
                        <h2 className="text-4xl font-Dancing font-bold text-orange-600 italic">Entertainment ekhanei !! <br />
                            <span className=" text-purple-500">Black bran</span></h2>
                        <p>Black bran offichial site..<br />Providing reliable tech since 2014</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Conchet</a>
                        <a className="link link-hover">Party</a>
                        <a className="link link-hover">Wedding party</a>
                        <a className="link link-hover">Convocation chenter</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Heir us</a>
                        <a className="link link-hover">Brand name</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Social</header>
                        <a className="link link-hover flex gap-2 items-center"><BsFacebook></BsFacebook> Facebook</a>
                        <a className="link link-hover flex gap-2 items-center"><BsInstagram></BsInstagram> Instagram</a>
                        <a className="link link-hover flex gap-2 items-center"><BsTwitter></BsTwitter> Twitter</a>
                    </nav>
                </footer>
            </footer>
        </div>
    );
};

export default Home;