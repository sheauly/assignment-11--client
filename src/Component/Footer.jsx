import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState();

    const handleSubscribe = (e) => {

        e.preventDefault();
        if (!email) {
            alert("Please enter your email addres!");
            return;
        }
        alert("Subscription successfull")
        setEmail("");
    }
    return (
        <footer className="bg-base-200 text-base-content px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-xl font-bold text-primary">🍽️ DineEase</h2>
                    <p className="mt-2">Your perfect restaurant partner. Enjoy seamless management and delicious experience.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a className="link link-hover">Home</a></li>
                        <li><a className="link link-hover">Menu</a></li>
                        <li><a className="link link-hover">Orders</a></li>
                        <li><a className="link link-hover">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p>Email: shulybd1245@gmail.com</p>
                    <p>Phone: 01518471238</p>
                    <p>Location: Dhaka, Bangladesh</p>
                </div>

                {/* Socials + Newsletter */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl mb-4">
                        <a><FaFacebook className="hover:text-blue-600" /></a>
                        <a><FaInstagram className="hover:text-pink-500" /></a>
                        <a><FaTwitter className="hover:text-blue-400" /></a>
                    </div>

                    {/* Newsletter */}
                    <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                        />
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} DineEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
