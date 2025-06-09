import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    
    const handlelogin = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password);
    
            // logIn
            signIn(email, password)
                .then(result => {
                    if (result) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your listing has been deleted.",
                            icon: "success"
                        });

                    }
                })
                .catch(error => {
                console.log(error)
            })
    }
    const handleGooglogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto">
            <div className=" flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handlelogin}>
                            <fieldset className="fieldset">
                               
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                {/* photo */}
                                <label className="label">Photo</label>
                                <input type="photo" name='photo' className="input" placeholder="photo url" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>

                            <button onClick={handleGooglogin}
                                type="button"

                                className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
                            >
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>

                            <p className="text-center text-sm pt-5">
                                Don't have an account ? <Link to="/register" className="text-green-700 font-medium">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;