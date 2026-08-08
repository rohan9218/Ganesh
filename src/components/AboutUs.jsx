import { Link } from "react-router-dom";
import About from "../assets/About.png";
import About1 from "../assets/About1.webp";

const AboutUs = () => {
    return (
        <div className="bg-white text-[#071a2d]">

            {/* =====================================================
    PAGE HERO
====================================================== */}

            <section
                className="relative bg-[#071a2d] overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url(${About})`,
                }}
            >

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071a2d]/95 via-[#071a2d]/85 to-[#071a2d]/70"></div>

                <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20">

                    <div className="max-w-3xl">

                        <p className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
                            ABOUT US
                        </p>

                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Quality Steelware for
                            <span className="text-orange-500"> Every Kitchen</span>
                        </h1>

                        <p className="text-gray-300 text-sm md:text-base leading-7 mt-5 max-w-2xl">
                            Your trusted partner for premium stainless steel utensils
                            and kitchenware. We bring quality, durability and value
                            together for every kitchen.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-7">

                            <Link
                                to="/products"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Explore Products
                            </Link>

                            <Link
                                to="/contact"
                                className="border border-white/40 hover:border-orange-500 text-white hover:text-orange-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
                ABOUT COMPANY
            ====================================================== */}
            <section className="max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-14 md:py-20">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
                            WHO WE ARE
                        </p>

                        <h2 className="text-[#071a2d] text-3xl md:text-4xl font-bold leading-tight">
                            Your Trusted Partner for
                            <span className="text-orange-500"> Stainless Steel Products</span>
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-7 mt-5">
                            Shree Ganesh Steel Centre is committed to providing
                            high-quality stainless steel utensils and kitchenware
                            for homes, businesses and everyday kitchen needs.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-7 mt-4">
                            We offer a wide range of reliable and durable products
                            designed to make your kitchen more convenient,
                            organized and beautiful.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-7 mt-4">
                            Whether you are looking for individual kitchen
                            essentials, complete utensil sets or products for
                            wholesale and retail requirements, we aim to provide
                            quality products at affordable prices.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-7">

                            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                                <h3 className="text-2xl font-bold text-orange-500">
                                    100%
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Quality Focus
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                                <h3 className="text-2xl font-bold text-orange-500">
                                    Wide
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Product Range
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative">

                        <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-orange-500 rounded-2xl"></div>

                        <div className="relative overflow-hidden rounded-2xl bg-gray-100">

                            <img
                                src={About1}
                                alt="Shree Ganesh Steel Centre Stainless Steel Products"
                                className="w-full h-[350px] md:h-[450px] object-cover"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY CHOOSE US
            ====================================================== */}
            <section className="bg-[#f8f7f4] py-14 md:py-20">

                <div className="max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">
                            WHY CHOOSE US?
                        </p>

                        <h2 className="text-[#071a2d] text-3xl md:text-4xl font-bold mt-2">
                            Quality You Can Trust,
                            <br />
                            Service You Deserve
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-7 mt-4">
                            We are committed to providing high-quality stainless
                            steel utensils and kitchenware that make your daily
                            life easier and your kitchen more beautiful.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                                ✓
                            </div>

                            <h3 className="font-bold text-[#071a2d] mt-4">
                                Genuine Quality
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                100% genuine stainless steel products.
                            </p>

                        </div>


                        {/* CARD 2 */}
                        <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                                ♢
                            </div>

                            <h3 className="font-bold text-[#071a2d] mt-4">
                                Durable Products
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                Durable, rust-free and long-lasting.
                            </p>

                        </div>


                        {/* CARD 3 */}
                        <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                                ▦
                            </div>

                            <h3 className="font-bold text-[#071a2d] mt-4">
                                Wide Range
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                Kitchen essentials for every requirement.
                            </p>

                        </div>


                        {/* CARD 4 */}
                        <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                                ₹
                            </div>

                            <h3 className="font-bold text-[#071a2d] mt-4">
                                Best Prices
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                Affordable prices for every budget.
                            </p>

                        </div>


                        {/* CARD 5 */}
                        <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl">
                                ♡
                            </div>

                            <h3 className="font-bold text-[#071a2d] mt-4">
                                Customer Support
                            </h3>

                            <p className="text-gray-500 text-sm mt-2 leading-6">
                                Reliable service and customer support.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OUR PRODUCTS
            ====================================================== */}
            <section className="max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-14 md:py-20">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <div className="order-2 lg:order-1">

                        <div className="rounded-2xl overflow-hidden bg-[#071a2d]">

                            <img
                                src="/images/kitchen-steel-utensils.png"
                                alt="Kitchen Steel Utensils"
                                className="w-full h-[320px] md:h-[400px] object-cover"
                            />

                        </div>

                    </div>


                    {/* CONTENT */}
                    <div className="order-1 lg:order-2">

                        <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">
                            OUR PRODUCTS
                        </p>

                        <h2 className="text-[#071a2d] text-3xl md:text-4xl font-bold mt-2">
                            Everything Your Kitchen Needs
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-7 mt-5">
                            Explore our collection of stainless steel utensils
                            and kitchenware made for everyday use.
                        </p>

                        <div className="space-y-3 mt-6">

                            {[
                                "Stainless Steel Utensils",
                                "Kitchen Steel Utensils",
                                "Steel Plates",
                                "Steel Bowls",
                                "Steel Glasses",
                                "Steel Jars",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                        ✓
                                    </span>

                                    <span className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <Link
                            to="/products"
                            className="inline-flex items-center gap-3 mt-7 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            View Products
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OUR COMMITMENT
            ====================================================== */}
            <section className="bg-[#071a2d] py-14 md:py-16">

                <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">

                    <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">
                        OUR COMMITMENT
                    </p>

                    <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
                        Built on Quality & Trust
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base leading-7 max-w-3xl mx-auto mt-5">
                        At Shree Ganesh Steel Centre, our focus is simple:
                        provide dependable stainless steel products, maintain
                        quality standards and offer friendly service to every
                        customer.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-7">

                        <div className="px-5 py-3 border border-white/20 rounded-lg text-white text-sm">
                            Quality Products
                        </div>

                        <div className="px-5 py-3 border border-white/20 rounded-lg text-white text-sm">
                            Affordable Prices
                        </div>

                        <div className="px-5 py-3 border border-white/20 rounded-lg text-white text-sm">
                            Trusted Service
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="py-12 md:py-16">

                <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                    <div className="bg-[#f8f7f4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-7 border border-gray-200">

                        <div>

                            <p className="text-orange-500 font-bold text-sm uppercase">
                                SHOP WITH US
                            </p>

                            <h2 className="text-[#071a2d] text-2xl md:text-3xl font-bold mt-2">
                                Upgrade Your Kitchen Today
                            </h2>

                            <p className="text-gray-600 text-sm mt-2">
                                Discover quality stainless steel products
                                for your kitchen.
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

export default AboutUs;