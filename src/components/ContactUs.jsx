import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.message.trim()
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Contact Form Data:", formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });

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

                {/* Decorative Elements */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[50px] border-orange-500/10"></div>

                <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[50px] border-orange-500/10"></div>

                <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20">

                    <div className="max-w-3xl">

                        <p className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-[3px] mb-3">
                            CONTACT US
                        </p>

                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Let's Talk About
                            <span className="text-orange-500">
                                {" "}Your Kitchen
                            </span>
                        </h1>

                        <p className="text-gray-300 text-sm md:text-base leading-7 mt-5 max-w-2xl">
                            Have a question about our products or services?
                            Get in touch with Shree Ganesh Steel Centre.
                            We are happy to help you.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT SECTION
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">

                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">


                    {/* =================================================
                        LEFT CONTACT INFORMATION
                    ================================================== */}
                    <div className="bg-[#071a2d] rounded-2xl p-7 md:p-9 text-white">

                        <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                            GET IN TOUCH
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold mt-3">
                            We’re Here
                            <br />
                            To Help You
                        </h2>

                        <p className="text-gray-300 text-sm leading-7 mt-5">
                            Whether you are looking for stainless steel
                            utensils, kitchenware, hotelware or home
                            products, feel free to contact us.
                        </p>


                        {/* Phone */}
                        <div className="flex gap-4 mt-8">

                            <div className="w-11 h-11 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">

                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
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


                        {/* Address */}
                        <div className="flex gap-4 mt-6">

                            <div className="w-11 h-11 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">

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
                                    Our Address
                                </p>

                                <p className="text-white text-sm font-semibold leading-6">
                                    Guruwar Peth Rd, near भरत मेडिकल,
                                    <br />
                                    Sangli, Guruvar Peth,
                                    <br />
                                    Madhavnagar, Maharashtra 416406
                                </p>

                            </div>

                        </div>


                        {/* Business */}
                        <div className="flex gap-4 mt-6">

                            <div className="w-11 h-11 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">

                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M4 10h16M6 10v9m4-9v9m4-9v9m4-9v9M3 19h18M5 10l7-6 7 6"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                </svg>

                            </div>

                            <div>

                                <p className="text-gray-400 text-xs">
                                    Business
                                </p>

                                <p className="text-white text-sm font-semibold">
                                    Wholesale & Retail Dealers
                                </p>

                            </div>

                        </div>


                        {/* Rating */}
                        <div className="mt-8 pt-7 border-t border-white/10">

                            <p className="text-gray-400 text-xs">
                                Customer Rating
                            </p>

                            <div className="flex items-center gap-3 mt-2">

                                <span className="text-3xl font-bold">
                                    4.8
                                </span>

                                <div>

                                    <div className="flex text-orange-500 tracking-[2px]">
                                        ★★★★★
                                    </div>

                                    <p className="text-gray-400 text-xs mt-1">
                                        14 Google Reviews
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        CONTACT FORM
                    ================================================== */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-9">

                        {submitted && (
                            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4">

                                <div className="flex items-start gap-3">

                                    <div className="w-7 h-7 shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center">
                                        ✓
                                    </div>

                                    <div>

                                        <h3 className="text-green-800 font-bold">
                                            Message Sent Successfully!
                                        </h3>

                                        <p className="text-green-700 text-sm mt-1">
                                            Thank you for contacting Shree Ganesh
                                            Steel Centre. We will get back to you
                                            soon.
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}


                        <div className="mb-7">

                            <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                                SEND US A MESSAGE
                            </p>

                            <h2 className="text-[#071a2d] text-2xl md:text-3xl font-bold mt-2">
                                Contact Us
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                Fill out the form below and our team will
                                contact you shortly.
                            </p>

                        </div>


                        <form onSubmit={handleSubmit}>

                            {/* Name + Email */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                        Your Name
                                        <span className="text-orange-500">
                                            {" "}*
                                        </span>
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
                                        <span className="text-orange-500">
                                            {" "}*
                                        </span>
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


                            {/* Phone + Subject */}
                            <div className="grid md:grid-cols-2 gap-5 mt-5">

                                <div>

                                    <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                        Phone Number
                                        <span className="text-orange-500">
                                            {" "}*
                                        </span>
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                    />

                                </div>


                                <div>

                                    <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                    />

                                </div>

                            </div>


                            {/* Message */}
                            <div className="mt-5">

                                <label className="block text-sm font-semibold text-[#071a2d] mb-2">
                                    Your Message
                                    <span className="text-orange-500">
                                        {" "}*
                                    </span>
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none resize-none text-sm text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition"
                                ></textarea>

                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Send Message →
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
                            Looking for quality kitchenware?
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                            Explore our wide range of stainless steel utensils
                            and kitchen essentials.
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

export default ContactUs;