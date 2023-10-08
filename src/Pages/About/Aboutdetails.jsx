import PropTypes from 'prop-types';
const Aboutdetails = ({band}) => {
    const {img, details, fee, name, title} = band;
    
    return (
        <div>
            <div data-aos="fade-left" className=" my-6">
                <img className=" w-11/12 h-96" src={img} alt="" />
                <h2 className=" text-2xl font-bold italic text-orange-300">Amount: {fee} $</h2>
                <h2 className="text-3xl font-bold text-orange-500">{name}</h2>
                <h3 className=" text-2xl font-bold text-orange-600">{title}</h3>
                <p>{details}</p>
            </div>
        </div>
    );
};
Aboutdetails.propTypes ={
    band:PropTypes.object
}

export default Aboutdetails;