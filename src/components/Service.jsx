import { Link } from "react-router-dom";

const Service = () => {
    const services = [
        {
            number: "01",
            title: "Stainless Steel Utensils",
            text: "A wide collection of quality stainless steel utensils designed for everyday kitchen use.",
            icon: "🍴",
        },
        {
            number: "02",
            title: "Kitchenware Collection",
            text: "Practical and stylish kitchenware products for homes and everyday cooking needs.",
            icon: "🍳",
        },
        {
            number: "03",
            title: "Wholesale & Retail",
            text: "Serving both wholesale and retail customers with a wide range of kitchen products.",
            icon: "🏪",
        },
        {
            number: "04",
            title: "Hotelware & Cutlery",
            text: "Quality hotelware and cutlery items suitable for restaurants, hotels and businesses.",
            icon: "🥄",
        },
        {
            number: "05",
            title: "Home Appliances",
            text: "Useful home appliances and kitchen essentials selected for convenience and reliability.",
            icon: "⚙️",
        },
        {
            number: "06",
            title: "Gift Articles",
            text: "A selection of useful and attractive kitchenware and gift articles for special occasions.",
            icon: "🎁",
        },
    ];

    return (
        <div className="bg-white text-[#071a2d]">

            {/* =====================================================
                SERVICE HERO
            ====================================================== */}
            <section className="relative overflow-hidden bg-[#071a2d]">

                {/* Decorative Shapes */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-[50px] border-orange-500/10"></div>

                <div className="absolute -bottom-40 left-[-100px] w-96 h-96 rounded-full border-[60px] border-orange-500/10"></div>

                <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <div>

                            <div className="inline-flex items-center gap-3 mb-5">

                                <span className="w-10 h-[2px] bg-orange-500"></span>

                                <span className="text-orange-500 font-semibold text-sm uppercase tracking-[3px]">
                                    Our Services
                                </span>

                            </div>

                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                                Everything You Need
                                <br />
                                For Your
                                <span className="text-orange-500">
                                    {" "}Kitchen
                                </span>
                            </h1>

                            <p className="text-gray-300 text-sm md:text-base leading-7 mt-6 max-w-xl">
                                From stainless steel utensils to kitchenware,
                                hotelware and home essentials, Shree Ganesh
                                Steel Centre brings quality products and
                                dependable service under one roof.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">

                                <Link
                                    to="/products"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                                >
                                    Explore Products
                                </Link>

                                <Link
                                    to="/contact"
                                    className="border border-white/30 hover:border-orange-500 text-white hover:text-orange-500 font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                                >
                                    Get In Touch
                                </Link>

                            </div>

                        </div>


                        {/* RIGHT VISUAL */}
                        <div className="relative hidden lg:flex justify-center">

                            <div className="relative w-[420px] h-[420px]">

                                <div className="absolute inset-5 rounded-full border border-orange-500/30"></div>

                                <div className="absolute inset-12 rounded-full border border-white/10"></div>

                                <div className="absolute inset-20 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl">

                                    <div className="text-center text-white">

                                        <div className="text-7xl mb-3">
                                            🍽️
                                        </div>

                                        <p className="font-bold text-xl">
                                            Kitchenware
                                        </p>

                                        <p className="text-sm text-orange-100 mt-1">
                                            Quality • Value • Trust
                                        </p>

                                    </div>

                                </div>

                                <div className="absolute top-6 left-10 bg-white rounded-xl shadow-xl px-5 py-3">
                                    <p className="text-xs text-gray-500">
                                        Quality
                                    </p>
                                    <p className="font-bold text-[#071a2d]">
                                        You Can Trust
                                    </p>
                                </div>

                                <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-xl px-5 py-3">
                                    <p className="text-xs text-gray-500">
                                        Service
                                    </p>
                                    <p className="font-bold text-[#071a2d]">
                                        You Deserve
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">

                <div className="grid md:grid-cols-2 gap-10 items-end">

                    <div>

                        <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                            What We Offer
                        </p>

                        <h2 className="text-[#071a2d] text-3xl md:text-4xl font-bold mt-3 leading-tight">
                            More Than Products.
                            <br />
                            <span className="text-orange-500">
                                A Complete Kitchen Solution.
                            </span>
                        </h2>

                    </div>

                    <p className="text-gray-600 text-sm md:text-base leading-7">
                        We offer a wide selection of kitchen and household
                        products for customers looking for quality,
                        durability and value. Whether you shop for your
                        home or business, our range is designed to meet
                        different requirements.
                    </p>

                </div>

            </section>


            {/* =====================================================
                SERVICES GRID
            ====================================================== */}
            <section className="bg-[#f7f5f1] py-14 md:py-20">

                <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {services.map((service) => (

                            <div
                                key={service.number}
                                className="group relative bg-white rounded-2xl p-7 border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >

                                {/* Number */}
                                <div className="absolute top-5 right-6 text-5xl font-black text-gray-100 group-hover:text-orange-100 transition-colors">
                                    {service.number}
                                </div>

                                {/* Icon */}
                                <div className="relative w-14 h-14 rounded-xl bg-[#071a2d] group-hover:bg-orange-500 flex items-center justify-center text-2xl transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="relative text-[#071a2d] text-xl font-bold mt-6">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-6 mt-3">
                                    {service.text}
                                </p>

                                <div className="w-10 h-[2px] bg-orange-500 mt-5 group-hover:w-16 transition-all duration-300"></div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHOLESALE & RETAIL
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">

                <div className="bg-[#071a2d] rounded-3xl overflow-hidden">

                    <div className="grid md:grid-cols-2">

                        {/* LEFT */}
                        <div className="p-8 md:p-12 lg:p-14">

                            <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                                Wholesale & Retail
                            </p>

                            <h2 className="text-white text-3xl md:text-4xl font-bold mt-3 leading-tight">
                                Kitchenware For
                                <span className="text-orange-500">
                                    {" "}Every Requirement
                                </span>
                            </h2>

                            <p className="text-gray-300 text-sm leading-7 mt-5">
                                Whether you are purchasing for your home,
                                restaurant, hotel or business, we provide
                                a wide range of kitchen and steel products
                                to suit your requirements.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mt-7">

                                <div className="border border-white/10 rounded-xl p-4">
                                    <p className="text-orange-500 text-xl">
                                        ✓
                                    </p>
                                    <p className="text-white text-sm font-semibold mt-1">
                                        Retail Orders
                                    </p>
                                </div>

                                <div className="border border-white/10 rounded-xl p-4">
                                    <p className="text-orange-500 text-xl">
                                        ✓
                                    </p>
                                    <p className="text-white text-sm font-semibold mt-1">
                                        Wholesale Orders
                                    </p>
                                </div>

                            </div>

                            <Link
                                to="/contact"
                                className="inline-block mt-7 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                            >
                                Contact Us
                            </Link>

                        </div>


                        {/* RIGHT */}
                        <div className="bg-orange-500 p-8 md:p-12 lg:p-14 flex items-center">

                            <div>

                                <div className="text-6xl mb-5">
                                    🛍️
                                </div>

                                <h3 className="text-white text-2xl md:text-3xl font-bold">
                                    Quality Products.
                                </h3>

                                <h3 className="text-[#071a2d] text-2xl md:text-3xl font-bold">
                                    Fair Prices.
                                </h3>

                                <p className="text-orange-50 text-sm leading-6 mt-4 max-w-md">
                                    We believe that good kitchenware should
                                    be practical, durable and accessible.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUALITY PROMISE
            ====================================================== */}
            <section className="bg-[#f7f5f1] py-14 md:py-20">

                <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                            Our Promise
                        </p>

                        <h2 className="text-[#071a2d] text-3xl md:text-4xl font-bold mt-3">
                            Quality You Can Trust
                        </h2>

                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            We focus on quality products and dependable
                            service to make every customer experience
                            simple and satisfying.
                        </p>

                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <p className="text-orange-500 text-3xl font-bold">
                                100%
                            </p>
                            <p className="text-[#071a2d] text-sm font-semibold mt-2">
                                Quality Focus
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <p className="text-orange-500 text-3xl font-bold">
                                Wide
                            </p>
                            <p className="text-[#071a2d] text-sm font-semibold mt-2">
                                Product Range
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <p className="text-orange-500 text-3xl font-bold">
                                Fair
                            </p>
                            <p className="text-[#071a2d] text-sm font-semibold mt-2">
                                Pricing
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 text-center">
                            <p className="text-orange-500 text-3xl font-bold">
                                4.8★
                            </p>
                            <p className="text-[#071a2d] text-sm font-semibold mt-2">
                                Customer Rating
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">

                <div className="relative bg-[#071a2d] rounded-3xl px-7 md:px-12 py-12 overflow-hidden">

                    <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full border-[40px] border-orange-500/10"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-7">

                        <div className="text-center md:text-left">

                            <p className="text-orange-500 text-sm font-bold uppercase tracking-[2px]">
                                Let's Get Started
                            </p>

                            <h2 className="text-white text-2xl md:text-3xl font-bold mt-2">
                                Looking For Quality Kitchenware?
                            </h2>

                            <p className="text-gray-300 text-sm mt-3">
                                Explore our products or get in touch with us.
                            </p>

                        </div>

                        <Link
                            to="/products"
                            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                        >
                            Shop Now →
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Service;