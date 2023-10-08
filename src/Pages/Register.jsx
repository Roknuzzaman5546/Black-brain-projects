import { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Authcontext } from "../Authprovaider/Authprovaider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { userRegister } = useContext(Authcontext)
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        if(!/[A-Z]/.test(password)){
            return setError('Please Type password at least 1 capital letter')
        }
        if (!/[!@#$%^&*()]/.test(password)) {
            return setError(' Password should be 1 Speachial cerarcter')
        }
        userRegister(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    toast('User register sucsessfully go to home')
                    setTimeout(() =>{
                        navigate( location?.state ? location.state :'/')
                    }, 1500)
                }
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero rounded-lg bg-sky-200 mt-10 w-11/12 mx-auto">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-400">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                error && <p className=" text-red-600">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className=" mt-2">If you Have a account !! <Link to='/login' className=" text-blue-700 text-xl font-bold">Log in</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;