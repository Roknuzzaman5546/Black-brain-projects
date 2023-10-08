import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { BsArrowBarLeft } from "react-icons/bs";

const Details = () => {
    const bands = useLoaderData();
    const { id } = useParams()
    const band = bands.find(band => band.id == id);

    return (
        <div className=" w-11/12 mx-auto">
            <Navbar></Navbar>
            <div>
                <img className=" w-11/12 h-96" src={band.img} alt="" />
                <h2 className=" text-2xl text-orange-500 font-bold mt-2">{band.name}</h2>
                <p className=" font-bold text-xl text-orange-500">Fee: {band.fee} $</p>
                <p className=" italic">{band.details}</p>
                <Link to="/">
                    <button className=" my-2 bg-orange-600 px-7 py-2 text-white flex items-center gap-1"><BsArrowBarLeft></BsArrowBarLeft> Show our all service</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;