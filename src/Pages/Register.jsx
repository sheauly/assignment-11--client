import React from 'react';

const Register = () => {

    const handleRegisterform = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;