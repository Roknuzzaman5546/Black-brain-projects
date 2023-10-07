import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovaider/Authprovaider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/book'>Book</NavLink></li>
    </>

    const handleLogout = () => {
        userLogout()
            .then(result => {
                console.log(result)
                toast('sing out succesfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold font-Dancing">Black bran</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex md:flex-row flex-col-reverse gap-2">
                    {
                        user ?
                            <div className="flex md:flex-row items-center gap-2">
                                <h2 className=" md:display font-bold">{user.displayName}</h2>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <button className="btn" onClick={handleLogout}><Link>Sign out</Link></button>
                            </div>
                            :
                            <button className="btn"><Link to='/login'>Log in</Link></button>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;