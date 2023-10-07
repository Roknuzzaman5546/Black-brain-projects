import { useContext } from "react";
import { Authcontext } from "../Authprovaider/Authprovaider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Privateraout = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

Privateraout.propTypes ={
    children:PropTypes.object
}

export default Privateraout;