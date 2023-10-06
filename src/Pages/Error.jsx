import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className=" text-center space-y-2">
            <h3 className=" text-2xl font-bold text-center mt-20">404 <br /> page is not found</h3>
            <button className=" btn"><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default Error;