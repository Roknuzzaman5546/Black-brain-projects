import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Authcontext } from "../Authprovaider/Authprovaider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const {userlogin} = useContext(Authcontext)
    const navigate = useNavigate();
    const handlLogin = e  =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target. password.value;
        userlogin(email, password)
        .then(result =>{
            console.log('user logged succesfully',result.user)
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero rounded-lg bg-orange-200 w-11/12 mx-auto">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                            <p>If you do not have account <Link to='/register' className=" text-blue-700 font-bold">Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;