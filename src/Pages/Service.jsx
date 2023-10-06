import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Service = ({ band }) => {
    const { img, title, details, id } = band;
    return (
        <div>
            <Link to={`/service/${id}`}>
                <div className="card h-96 card-compact bg-base-100 shadow-xl">
                    <img className=" h-44 rounded-lg" src={img} alt="" />
                    <div className=" space-y-2 p-2">
                        <h2 className="card-title">{title}</h2>
                        <p className="">{details.length == 150 ? details : details.slice(0, 100)}</p>
                        <button className=" btn btn-primary">Book now</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Service.propTypes ={
    band: PropTypes.object.isRequired
}

export default Service;