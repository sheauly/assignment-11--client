import React from 'react';
import { motion } from "framer-motion";

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Rafiq Hossain",
            review: "The food was absolutely delicious and service was top-notch!",
            image: "https://i.ibb.co/Z1Rxnp09/download.jpg",
        },
        {
            id: 2,
            name: "Sabina Yasmin",
            review: "I loved the ambiance and the freshly prepared meals.",
            image: "https://i.ibb.co/5h5yfrCx/download.jpg",
        },
        {
            id: 3,
            name: "Arif Rahman",
            review: "Affordable prices and excellent taste. Highly recommended!",
            image: "https://i.ibb.co/DHF1WY9N/images.jpg",
        },
    ];

    return (
        <div className="py-14 bg-gray-50">
            <motion.h2
                className="text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                What Our Customers Say
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 px-6">
                {reviews.map((r) => (
                    <motion.div
                        key={r.id}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: r.id * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src={r.image} alt={r.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
                        <p className="text-sm text-gray-600 italic">"{r.review}"</p>
                        <p className="mt-4 text-center font-semibold">{r.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
