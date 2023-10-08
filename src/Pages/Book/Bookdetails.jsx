import PropTypes from 'prop-types';

const Bookdetails = ({ band }) => {
    const {  img, fee, name } = band;
    return (
        <div className="">
            <img className=" w-11/12 mx-auto h-56 mb-3 rounded-lg" src={img} alt="" />
            <div className=" flex flex-col items-center gap-2">
                <h2 className=" text-center btn btn-outline btn-secondary text-orange-400 font-bold">Fee: {fee} $</h2>
                <h3 className=" text-center btn btn-outline btn-secondary text-xl text-orange-400">Heir :{name}</h3>
            </div>
        </div>
    );
};

Bookdetails.propTypes ={
    band:PropTypes.object
}
export default Bookdetails;