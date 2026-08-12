import { useState } from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        rating: 0,
        feedback: "",
    });

    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRating = (rating) => {
        setFormData((prev) => ({
            ...prev,
            rating,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            alert("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            alert("Please enter your email.");
            return;
        }

        if (!formData.phone.trim()) {
            alert("Please enter your phone number.");
            return;
        }

        if (formData.rating === 0) {
            alert("Please select a rating.");
            return;
        }

        if (!formData.feedback.trim()) {
            alert("Please write your feedback.");
            return;
        }

        console.log("Customer Feedback:", formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            rating: 0,
            feedback: "",
        });

        setHoverRating(0);

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-[#f7f5f1]">

            {/* =====================================================
                PAGE HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#071a2d]">

                {/* Decorative circles */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[50px] border-orange-500/10"></div>

                <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[50px] border-orange-500/10"></div>

                <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20">

                    <div className="max-w-3xl">

                        <p className="text-orange-500 font-bold text-sm uppercase tracking-[3px] mb-3">
                            CUSTOMER FEEDBACK
                        </p>

                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Your Feedback
                            <span className="text-orange-500">
                                {" "}Matters
                            </span>
                        </h1>

                        <p className="text-gray-300 text-sm md:text-base leading-7 mt-5 max-w-2xl">
                            We value your experience with Shree Ganesh Steel
                            Centre. Share your feedback and help us serve you
                            better.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEEDBACK SECTION
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">


                    {/* =================================================
                        LEFT INFORMATION
                    ================================================== */}
                    <div className="bg-[#071a2d] rounded-2xl p-7 md:p-9 text-white">

                        <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                            WE'D LOVE TO HEAR FROM YOU
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mt-3">
                            Tell Us About
                            <br />
                            Your Experience
                        </h2>

                        <p className="text-gray-300 text-sm leading-7 mt-5">
                            Your opinion helps us improve our products and
                            services. Whether you had a great experience or
                            have suggestions for improvement, we would love
                            to hear from you.
                        </p>


                        {/* Rating */}
                        <div className="mt-8 border-t border-white/10 pt-7">

                            <p className="text-gray-400 text-sm">
                                Our Google Rating
                            </p>

                            <div className="flex items-center gap-3 mt-2">

                                <span className="text-3xl font-bold">
                                    4.8
                                </span>

                                <div>
                                    <div className="flex text-orange-500 text-lg tracking-wide">
                                        ★★★★★
                                    </div>

                                    <p className="text-gray-400 text-xs mt-1">
                                        14 Google Reviews
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Contact Info */}
                        <div className="mt-8 space-y-5">

                            <div className="flex gap-4">

                                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2L9 7 6.5 8.5a12 12 0 0 0 9 9L17 15l4 1.5v2A2.5 2.5 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5Z"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">
                                        Call Us
                                    </p>

                                    <a
                                        href="tel:8183830505"
                                        className="text-white text-sm font-semibold hover:text-orange-500 transition"
                                    >
                                        8183830505
                                    </a>
                                </div>

                            </div>


                            <div className="flex gap-4">

                                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">

                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <circle
                                            cx="12"
                                            cy="10"
                                            r="2.2"
                                            strokeWidth="1.7"
                                        />
                                    </svg>

                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs">
                                        Visit Us
                                    </p>

                                    <p className="text-white text-sm font-semibold leading-5">
                                        Guruwar Peth Rd, near भरत मेडिकल,
                                        <br />
                                        Sangli, Maharashtra 416406
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        FEEDBACK FORM
                    ================================================== */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-9">

                        {submitted && (
                            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4">

                                <div className="flex items-start gap-3">

                                    <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                        ✓
                                    </div>

                                    <div>

                                        <h3 className="text-green-800 font-bold">
                                            Thank You!
                                        </h3>

                                        <p className="text-green-700 text-sm mt-1">
                                            Your feedback has been submitted
                                            successfully.
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}


                        <div className="mb-7">

                            <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                                SHARE YOUR EXPERIENCE
                            </p>

                            <h2 className="text-[#071a2d] text-2xl md:text-3xl font-bold mt-2">
                                Give Us Your Feedback
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                It only takes a minute to share your experience.
                            </p>

                        </div>


                        <form onSubmit={handleSubmit}>

                            {/* Name + Email */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                    />

                                </div>


                                <div>

                                    <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                    />

                                </div>

                            </div>


                            {/* Phone */}
                            <div className="mt-5">

                                <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                />

                            </div>


                            {/* Rating */}
                            <div className="mt-6">

                                <label className="block text-sm font-semibold text-[#071a2d] mb-3">
                                    How Would You Rate Us?
                                </label>

                                <div className="flex items-center gap-2">

                                    {[1, 2, 3, 4, 5].map((star) => (

                                        <button
                                            type="button"
                                            key={star}
                                            onClick={() => handleRating(star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="text-3xl leading-none transition-transform hover:scale-110"
                                            aria-label={`Rate ${star} star`}
                                        >

                                            <span
                                                className={
                                                    star <= (hoverRating || formData.rating)
                                                        ? "text-orange-500"
                                                        : "text-gray-300"
                                                }
                                            >
                                                ★
                                            </span>

                                        </button>

                                    ))}

                                    <span className="text-sm text-gray-500 ml-2">
                                        {formData.rating > 0
                                            ? `${formData.rating}/5`
                                            : "Select rating"}
                                    </span>

                                </div>

                            </div>


                            {/* Feedback */}
                            <div className="mt-6">

                                <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                    Your Feedback
                                </label>

                                <textarea
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Tell us about your experience..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none resize-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                ></textarea>

                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Submit Feedback →
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 pb-14 md:pb-20">

                <div className="bg-white border border-gray-200 rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-5">

                    <div className="text-center md:text-left">

                        <h3 className="text-[#071a2d] text-xl md:text-2xl font-bold">
                            Want to explore our products?
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                            Discover our wide range of kitchenware and
                            stainless steel products.
                        </p>

                    </div>

                    <Link
                        to="/products"
                        className="shrink-0 bg-[#071a2d] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    >
                        View Products →
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default Feedback;