import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BestSellingBanner from "../assets/BestSellingBanner.png";
import BestSellingBanner1 from "../assets/BestSellingBanner1.png";
import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import heroBackground from "../assets/heroBackground.png";
import Product1 from "../assets/Product1.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import WhyChooseUs from "../assets/WhyChooseUs.png";
const products = [
    {
        name: "Steel Full Plate Set",
        image: Product1,
    },
    {
        name: "Steel Bowl And Glass Set",
        image: Product2,
    },
    {
        name: "Steel Fork Set",
        image: Product3,
    },
    {
        name: "Steel Spoon Set",
        image: Product4,
    },
    {
        name: "Steel Jars",
        image: Product5,
    },
];

const features = [
    {
        title: "Wide Variety",
        text: "Huge collection for every need",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
            >
                <path
                    d="m12 3 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        title: "Premium Quality",
        text: "100% genuine stainless steel",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
            >
                <path
                    d="M12 2 20 6v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4Z"
                    strokeWidth="1.8"
                />
                <path
                    d="m9 12 2 2 4-5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        title: "Affordable Prices",
        text: "Best deals for every budget",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
            >
                <path
                    d="M20 13 11 22 2 13V4h9l9 9Z"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
                <circle cx="7" cy="9" r="1.5" />
            </svg>
        ),
    },

    {
        title: "Wholesale & Retail",
        text: "Serving all customer needs",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
            >
                <path
                    d="M6 8V6a6 6 0 0 1 12 0v2"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <path
                    d="M4 8h16l1 14H3L4 8Z"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        title: "Customer Satisfaction",
        text: "Trusted by hundreds of families",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="9" cy="8" r="4" strokeWidth="1.8" />

                <path
                    d="M2 21c.5-5 3-7 7-7s6.5 2 7 7"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                <path
                    d="M16 5c3 0 5 2 5 5s-2 5-5 5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
];

const HeroFeature = ({ title, text }) => {
    return (
        <div className="flex items-center gap-2">

            <div className="w-9 h-9 shrink-0 rounded-full border border-orange-500/60 flex items-center justify-center text-orange-500">
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 3 20 7v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V7l8-4Z"
                        strokeWidth="1.8"
                    />
                </svg>
            </div>

            <div>
                <p className="text-white text-[11px] font-semibold leading-tight">
                    {title}
                </p>

                <p className="text-gray-300 text-[10px] mt-1 leading-tight">
                    {text}
                </p>
            </div>

        </div>
    );
};

function Home() {
    const [currentBanner, setCurrentBanner] = useState(0);

useEffect(() => {
    const slider = setInterval(() => {
        setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(slider);
}, []);
    return (
        <main className="bg-white">
            {/* ================= HERO SECTION ================= */}
            <section
                className="relative w-full min-h-[320px] md:min-h-[360px] lg:min-h-[410px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                }}
            >
                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1060px] mx-auto px-6 md:px-8 h-full min-h-[320px] md:min-h-[360px] lg:min-h-[410px] flex items-center">

                    <div className="max-w-[520px] text-left">

                        {/* Heading */}
                        <p
                            className="text-white text-[38px] md:text-[48px] lg:text-[54px] leading-none italic"
                            style={{
                                fontFamily: "'Brush Script MT', cursive",
                            }}
                        >
                            Your Kitchen,
                        </p>

                        <h1 className="text-orange-500 font-extrabold text-[45px] md:text-[55px] lg:text-[62px] leading-none mt-2">
                            Our Quality
                        </h1>

                        {/* Description */}
                        <p className="text-white text-[14px] md:text-[16px] mt-5 leading-relaxed">
                            Premium Stainless Steel Utensils & Kitchenware
                            <br />
                            for Every Home & Every Need.
                        </p>

                        {/* Features */}
                        <div className="hidden sm:grid grid-cols-4 gap-4 mt-5">

                            <HeroFeature
                                title="Premium Quality"
                                text="100% Stainless Steel"
                            />

                            <HeroFeature
                                title="Wide Range"
                                text="For Every Kitchen"
                            />

                            <HeroFeature
                                title="Best Prices"
                                text="Wholesale & Retail"
                            />

                            <HeroFeature
                                title="Trusted by Many"
                                text="4.8★ Google Rating"
                            />

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-6">

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition"
                            >
                                Explore Products
                                <span className="text-xl">→</span>
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 border border-white/70 text-white px-7 py-3 rounded-md text-sm font-semibold hover:bg-white hover:text-[#071a2d] transition"
                            >
                                {/* Phone Icon */}
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                                </svg>

                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
                MAIN CATEGORIES
            ====================================================== */}
            <section className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-10 py-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Stainless Steel */}
                    <div className="group relative overflow-hidden h-[160px] md:h-[165px] bg-[#071a2d] rounded-xl">

                        {/* Product Image */}
                        <div className="absolute right-0 top-0 w-[100%] h-full flex items-center justify-center">

                            <img
                                src={Hero1}
                                alt="Stainless Steel Utensils"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>

                        {/* Content 
                        <div className="relative z-10 p-5 md:p-6 w-[55%] h-full">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0">

                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 9h14M6 9l1 10h10l1-10M8 9V6h8v3"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </div>

                                <h2 className="text-white text-lg md:text-xl font-bold whitespace-nowrap">
                                    Stainless Steel Utensils
                                </h2>

                            </div>

                            <p className="text-gray-300 mt-3 text-xs md:text-sm leading-5">
                                Our product range includes a wide
                                <br />
                                range of Kitchen Steel Utensils.
                            </p>

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-3 text-orange-500 font-semibold text-xs md:text-sm mt-4 hover:gap-5 transition-all"
                            >
                                View More
                                <span>→</span>
                            </Link>

                        </div>*/}

                    </div>


                    {/* Kitchen Steel */}
                    <div className="group relative overflow-hidden h-[160px] md:h-[165px] bg-[#faf7f2] border border-gray-200 rounded-xl">

                        {/* Product Image */}
                        <div className="absolute right-0 top-0 w-[100%] h-full flex items-center justify-center overflow-hidden">
                            <img
                                src={Hero2}
                                alt="Kitchen Steel Utensils"
                                className="w-full h-auto max-h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content 
                        <div className="relative z-10 p-5 md:p-6 w-[55%] h-full">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0">

                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 10h14v9H5v-9ZM8 10V7h8v3M9 4h6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                </div>

                                <h2 className="text-[#071a2d] text-lg md:text-xl font-bold whitespace-nowrap">
                                    Kitchen Steel Utensils
                                </h2>

                            </div>

                            <p className="text-gray-600 mt-4 text-xs md:text-sm">
                                View more details
                            </p>

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-3 text-orange-500 font-semibold text-xs md:text-sm mt-4 hover:gap-5 transition-all"
                            >
                                View More
                                <span>→</span>
                            </Link>

                        </div>*/}

                    </div>

                </div>

            </section>

            {/* =====================================================
                OTHER PRODUCTS
            ====================================================== */}
            <section className="max-w-[1400px] mx-auto px-5 md:px-8 pt-1 pb-5">

                <div className="text-center mb-3">
                    <p className="uppercase text-orange-500 font-bold text-xs tracking-wider">
                        Other Products
                    </p>

                    <h2 className="text-[#071a2d] text-xl md:text-2xl font-bold mt-1">
                        We are a leading Retailer of Steel Utensils & Kitchenware
                    </h2>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                    {products.map((product, index) => (
                        <Link
                            to="/products"
                            key={index}
                            className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="h-[135px] md:h-[155px] p-3 flex items-center justify-center overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />

                            </div>

                            <div className="border-t border-gray-100 px-3 py-3 text-center">

                                <h3 className="text-[#111827] font-medium text-sm md:text-base">
                                    {product.name}
                                </h3>

                            </div>

                        </Link>
                    ))}
                </div>
            </section>

            {/* =====================================================
                FEATURES
            ====================================================== */}
            <section className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-10 pb-8">

                <div className="bg-[#faf9f7] border border-gray-100 rounded-xl shadow-sm px-5 py-5">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 px-4 py-4 lg:py-1 ${index !== features.length - 1
                                    ? "lg:border-r lg:border-gray-200"
                                    : ""
                                    }`}
                            >

                                <div className="text-orange-500 shrink-0">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#071a2d] text-sm">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 text-xs mt-1">
                                        {feature.text}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* =====================================================
                WHY CHOOSE US
            ====================================================== */}
            <section className="w-full bg-white py-10 md:py-14">

                <div className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">

                        {/* =================================================
                            LEFT SIDE - TEXT
                        ================================================== */}
                        <div className="w-full">

                            <p className="text-orange-500 font-bold text-sm md:text-base uppercase mb-3">
                                WHY CHOOSE US?
                            </p>

                            <h2 className="text-[#071a2d] text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15]">
                                Quality You Can Trust,
                                <br />
                                Service You Deserve
                            </h2>

                            <p className="text-gray-600 text-sm md:text-base leading-7 mt-5 max-w-[560px]">
                                We are committed to providing high-quality stainless steel
                                utensils and kitchenware that make your daily life easier
                                and your kitchen more beautiful.
                            </p>


                            {/* =================================================
                                FEATURES
                            ================================================== */}
                            <div className="mt-6 space-y-3.5">

                                {/* Feature 1 */}
                                <div className="flex items-center gap-3">

                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3 h-3 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m5 12 4 4L19 6"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[#071a2d] text-sm md:text-base font-medium">
                                        100% Genuine Stainless Steel
                                    </span>

                                </div>


                                {/* Feature 2 */}
                                <div className="flex items-center gap-3">

                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3 h-3 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m5 12 4 4L19 6"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[#071a2d] text-sm md:text-base font-medium">
                                        Durable, Rust-Free & Long Lasting
                                    </span>

                                </div>


                                {/* Feature 3 */}
                                <div className="flex items-center gap-3">

                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3 h-3 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m5 12 4 4L19 6"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[#071a2d] text-sm md:text-base font-medium">
                                        Wide Range of Kitchen Essentials
                                    </span>

                                </div>


                                {/* Feature 4 */}
                                <div className="flex items-center gap-3">

                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3 h-3 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m5 12 4 4L19 6"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[#071a2d] text-sm md:text-base font-medium">
                                        Affordable Prices for Every Budget
                                    </span>

                                </div>


                                {/* Feature 5 */}
                                <div className="flex items-center gap-3">

                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-3 h-3 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m5 12 4 4L19 6"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[#071a2d] text-sm md:text-base font-medium">
                                        Reliable After-Sales Support
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT SIDE - IMAGE
                        ================================================== */}
                        <div className="relative w-full">

                            {/* Orange Back Border */}
                            <div className="absolute right-[-8px] bottom-[-10px] w-full h-full bg-orange-500 rounded-[24px]"></div>

                            {/* Image Container */}
                            <div className="relative z-10 w-full h-[300px] md:h-[380px] lg:h-[400px] overflow-hidden rounded-[24px]">

                                <img
                                    src={WhyChooseUs}
                                    alt="Stainless Steel Kitchenware"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* =====================================================
    BEST SELLING PRODUCTS
====================================================== */}
            <section className="w-full bg-white py-8 md:py-10">

                {/* Section Heading */}
                <div className="text-center mb-5">

                    <p className="text-orange-500 font-semibold text-sm md:text-base uppercase tracking-wide">
                        BEST SELLING PRODUCTS
                    </p>

                    <h2 className="text-[#071a2d] text-2xl md:text-3xl font-bold mt-1">
                        Top Picks for Your Kitchen
                    </h2>

                </div>


                {/* Products Grid */}
                <div className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-10">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                        {/* Product 1 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product11}
                                    alt="Stainless Steel Dinner Set"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Stainless Steel
                                    <br />
                                    Dinner Set (24 Pcs)
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹2,499
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>


                        {/* Product 2 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product12}
                                    alt="Stainless Steel Handi with Lid"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Stainless Steel
                                    <br />
                                    Handi with Lid (3 Pcs)
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹1,299
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>


                        {/* Product 3 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product13}
                                    alt="Steel Glass Set"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Steel Glass Set
                                    <br />
                                    (6 Pcs)
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹499
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>


                        {/* Product 4 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product14}
                                    alt="Stainless Steel Container Set"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Stainless Steel
                                    <br />
                                    Container Set (7 Pcs)
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹1,199
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>


                        {/* Product 5 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product15}
                                    alt="Stainless Steel Thali Plate"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Stainless Steel
                                    <br />
                                    Thali Plate
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹199
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>


                        {/* Product 6 */}
                        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">

                            <div className="w-full h-[150px] md:h-[165px] flex items-center justify-center p-3 overflow-hidden">
                                <img
                                    src={product16}
                                    alt="Stainless Steel Jar"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="px-3 pb-3">

                                <h3 className="text-[#071a2d] text-sm font-medium leading-5 min-h-[40px]">
                                    Stainless Steel
                                    <br />
                                    Jar (1 Pc)
                                </h3>

                                <p className="text-[#071a2d] text-lg font-semibold mt-1">
                                    ₹349
                                </p>

                                <button
                                    className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="10" cy="20" r="1.5" />
                                        <circle cx="18" cy="20" r="1.5" />
                                    </svg>

                                    Add to Cart
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
               {/* =====================================================
    BEST SELLING BANNER SLIDER
====================================================== */}
<div className="relative mt-5 w-full overflow-hidden rounded-xl">

    <img
        src={
            currentBanner === 0
                ? BestSellingBanner
                : BestSellingBanner1
        }
        alt="Upgrade Your Kitchen With Premium Quality"
        className="w-full h-auto object-cover object-center transition-opacity duration-500"
    />

</div>

            </section>
{/* =====================================================
    WHAT OUR CUSTOMERS SAY
====================================================== */}
<section className="w-full bg-white py-10 md:py-14 overflow-hidden">

    {/* Section Heading */}
    <div className="text-center mb-6 md:mb-8">

        <p className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-wide">
            WHAT OUR CUSTOMERS SAY
        </p>

        <h2 className="text-[#071a2d] text-2xl md:text-3xl font-bold mt-2">
            Trusted by Hundreds of Happy Customers
        </h2>

    </div>

    {/* Customer Reviews Slider */}
    <div className="w-full max-w-[1400px] mx-auto overflow-hidden relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        {/* Moving Cards */}
        <div className="flex w-max animate-[customerScroll_25s_linear_infinite]">

            {[...Array(2)].flatMap(() => [
                {
                    review:
                        "Excellent quality products at very reasonable prices. Highly recommended!",
                    name: "Amit Patil",
                },
                {
                    review:
                        "Huge collection and very good service. All my kitchen needs under one roof.",
                    name: "Sneha K.",
                },
                {
                    review:
                        "The utensils are durable and long lasting. Very happy with the purchase.",
                    name: "Rahul Deshmukh",
                },
            ]).map((customer, index) => (

                <div
                    key={index}
                    className="w-[280px] md:w-[330px] lg:w-[380px] min-h-[145px] md:min-h-[155px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 mx-2 md:mx-3 p-5 md:p-6 shrink-0"
                >

                    {/* Quote Icon */}
                    <div className="text-orange-500 text-4xl font-bold leading-none">
                        “
                    </div>

                    {/* Review */}
                    <p className="text-[#374151] text-sm md:text-base leading-6 mt-1">
                        {customer.review}
                    </p>

                    {/* Customer Name */}
                    <p className="text-[#071a2d] font-semibold text-sm md:text-base mt-4">
                        — {customer.name}
                    </p>

                </div>

            ))}

        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

    </div>

    {/* Slider Animation */}
    <style>
        {`
            @keyframes customerScroll {
                0% {
                    transform: translateX(0);
                }

                100% {
                    transform: translateX(-50%);
                }
            }
        `}
    </style>

</section>
        </main>
    );
}

export default Home;