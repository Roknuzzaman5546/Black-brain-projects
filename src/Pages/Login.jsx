import { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Authcontext } from "../Authprovaider/Authprovaider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const { userlogin, userGoogle } = useContext(Authcontext)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handlLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        userlogin(email, password)
            .then(result => {
                console.log('user logged succesfully', result.user)
                if (result.user) {
                    toast("Log is succesfully go to home Page")
                    navigate( location?.state ? location.state : ('/'))
                }
            })
            .catch(error => {
                console.log(error)
                setError("Email or pasword dosn't match")
            })
    }

    const handleGoogleLogin = () =>{
        userGoogle()
        .then(result =>{
            console.log(result.user)
            toast('Log in seccesfully Go to home')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero rounded-lg bg-orange-200 w-11/12 mt-10 mx-auto">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-300">
                        <form className="card-body" onSubmit={handlLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className=" font-bold text-red-500 text-sm">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary font-Blackops">Login</button>
                            </div>
                            <button onClick={handleGoogleLogin} className=" btn btn-outline btn-neutral flex gap-2 items-center font-bold"><BsGoogle></BsGoogle> Log in with Google</button>
                            <p className=" mt-2">If you do not have account  <Link to='/register' className=" text-blue-700 text-xl font-bold"> Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;