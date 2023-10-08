import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Service = ({ band }) => {
    const { img, title, name, id, fee } = band;


    return (
        <div>
            <Link to={`/service/${id}`}>
                <div data-aos=" fade-up" className="card h-96 card-compact bg-base-100 shadow-xl">
                    <img className=" h-44 rounded-lg" src={img} alt="" />
                    <div className=" space-y-2 p-2 flex flex-col items-center">
                        <h2 className=" text-2xl font-bold text-orange-500">{name}</h2>
                        <p className=" font-bold">Amount: {fee} $</p>
                        <h2 className="card-title flex-grow text-center">{title}</h2>
                        <button className=" btn btn-primary btn-outline">Book now</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Service.propTypes = {
    band: PropTypes.object.isRequired
}

export default Service;