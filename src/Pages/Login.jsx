import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;