import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser, googleSignIn } = use(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleRegisterform = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const lengthValid = password.length >= 6;

        if (!uppercase || !lowercase || !lengthValid) {
            setError("Password must contain at least one uppercase, one lowercase and be 6+ characters.");
            return;
        }

        // createUser
        createUser(email, password)
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

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
                console.log(result)
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegisterform}>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input type="name" name='name' className="input" placeholder="name" />
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
                                <button className="btn btn-neutral mt-4">Register Now</button>
                            </fieldset>
                            <div className="divider">OR</div>

                            <button onClick={handleGoogleRegister} type="button" className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2">
                                {/* Google icon here */}
                                Register with Google
                            </button>

                            <p className="text-center text-sm pt-5">
                                Already have an account? <Link to="/login" className="text-green-700 font-medium">Login</Link>
                            </p>

                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;