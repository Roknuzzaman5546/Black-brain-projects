import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Authprovaider/Authprovaider";

const Navbar = () => {
    const {user , userLogout} = useContext(Authcontext); 
    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/book'>Book</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </>

    const handleLogout = () =>{
        userLogout()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
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
                    <a className="btn btn-ghost normal-case text-xl italic font-bold">Black bran</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        links
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <button className="btn" onClick={handleLogout}><Link>Sign out</Link></button>
                        :
                        <button className="btn"><Link to='/login'>Log in</Link></button>
                    }
                    <button className="btn ml-2"><Link to="/register">Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;