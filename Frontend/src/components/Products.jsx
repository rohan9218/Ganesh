import { useState } from "react";

// Product Images
import Product1 from "../assets/Product1.png";
import Product6 from "../assets/product11.png";
import Product7 from "../assets/product12.png";
import Product8 from "../assets/product13.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import ProductsBanner from "../assets/ProductsBanner.png";

const Products = () => {
    const [selectedCategory, setSelectedCategory] =
        useState("All Categories");

    const [showCategories, setShowCategories] = useState(false);

    const categories = [
        "Tableware",
        "Kitchen Utility",
        "Premium Triply Range",
        "Serving Pot",
        "Cookware",
        "Insulated Food Carrier",
        "Hotelware",
        "Kids Range",
        "Serveware",
        "Combo",
    ];

    const products = [
        {
            id: 1,
            name: "4 Tier Leak Proof Lunch Kit",
            code: "RU4008",
            category: "Kitchen Utility",
            image: Product1,
            discount: "-30%",
            price: "₹797.30",
            oldPrice: "₹1,139.00",
        },
        {
            id: 2,
            name: "Accent Dryfruit Set",
            code: "RU2019",
            category: "Tableware",
            image: Product2,
            discount: "-15%",
            price: "₹3,101.65",
            oldPrice: "₹3,649.00",
        },
        {
            id: 3,
            name: "Air Tight Storage Drum",
            code: "RU4031",
            category: "Kitchen Utility",
            image: Product3,
            discount: "-15%",
            price: "₹1,699.15",
            oldPrice: "₹1,999.00",
        },
        {
            id: 4,
            name: "Alto See-Through Container",
            code: "RU4008",
            category: "Kitchen Utility",
            image: Product4,
            discount: "-30%",
            price: "₹587.30",
            oldPrice: "₹839.00",
        },
        {
            id: 5,
            name: "Aura Water Jug",
            code: "RU5011",
            category: "Serveware",
            image: Product5,
            discount: "-30%",
            price: "₹559.30",
            oldPrice: "₹799.00",
        },
        {
            id: 6,
            name: "Baleno See Through Container",
            code: "RU4009",
            category: "Kitchen Utility",
            image: Product6,
            discount: "-30%",
            price: "₹496.30",
            oldPrice: "₹709.00",
        },
        {
            id: 7,
            name: "Belly See Through Container",
            code: "RU4013",
            category: "Kitchen Utility",
            image: Product7,
            discount: "-15%",
            price: "₹730.15",
            oldPrice: "₹859.00",
        },
        {
            id: 8,
            name: "Brezza",
            code: "RU1009",
            category: "Cookware",
            image: Product8,
            discount: "-15%",
            price: "₹900.15",
            oldPrice: "₹1,059.00",
        },
    ];

    const filteredProducts =
        selectedCategory === "All Categories"
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            );

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setShowCategories(false);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* =========================
                PAGE HERO
            ========================== */}
          <section
    className="relative overflow-hidden bg-cover bg-center"
    style={{
        backgroundImage: `url(${ProductsBanner})`,
    }}
>
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#727a80] via-[#071a2d]/90 to-[#071a2d]/70"></div>

    <div className="relative max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20 text-center">

        <p className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
            OUR COLLECTION
        </p>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Products
        </h1>

        <p className="text-gray-300 mt-4 text-sm md:text-base">
            Premium stainless steel utensils and kitchenware for
            every kitchen.
        </p>

        <div className="mt-5 text-white text-sm">
            Home
            <span className="text-orange-500 mx-2">/</span>
            Products
        </div>

    </div>
</section>

            {/* =========================
                MOBILE CATEGORY MENU
            ========================== */}
            <div className="lg:hidden border-b border-gray-200">

                <button
                    onClick={() => setShowCategories(!showCategories)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white"
                >

                    <div className="flex items-center gap-3">

                        <svg
                            className="w-6 h-6 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>

                        <span className="font-semibold text-gray-900">
                            Featured Products
                        </span>

                    </div>

                    <svg
                        className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                            showCategories ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m6 9 6 6 6-6"
                        />
                    </svg>

                </button>


                {showCategories && (
                    <div className="bg-white px-5 pb-4">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategory(category)}
                                className="w-full flex items-center justify-between py-4 border-b border-gray-200 text-left"
                            >

                                <span
                                    className={
                                        selectedCategory === category
                                            ? "text-orange-500 font-semibold"
                                            : "text-gray-800"
                                    }
                                >
                                    {category}
                                </span>

                                <svg
                                    className="w-4 h-4 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m9 18 6-6-6-6"
                                    />
                                </svg>

                            </button>
                        ))}


                        <button
                            onClick={() =>
                                handleCategory("All Categories")
                            }
                            className="w-full flex items-center justify-between py-4 font-semibold text-gray-900"
                        >

                            <span className="flex items-center gap-3">

                                <span className="w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center text-xs">
                                    ...
                                </span>

                                All Categories

                            </span>

                            <span className="text-xl">
                                +
                            </span>

                        </button>

                    </div>
                )}

            </div>


            {/* =========================
                MAIN PRODUCT AREA
            ========================== */}
            <section className="max-w-[1500px] mx-auto px-5 md:px-8 lg:px-10 py-8">

                <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-8">


                    {/* =========================
                        LEFT SIDEBAR
                    ========================== */}
                    <aside className="hidden lg:block">

                        <div className="sticky top-5">

                            <div className="border-b border-gray-200 pb-5">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Featured Products
                                    </h2>

                                    <span className="text-orange-500">
                                        −
                                    </span>

                                </div>

                            </div>


                            {/* Categories */}
                            <div className="mt-2">

                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() =>
                                            handleCategory(category)
                                        }
                                        className={`w-full flex items-center justify-between py-4 border-b border-gray-200 text-left transition-colors duration-200 ${
                                            selectedCategory === category
                                                ? "text-orange-500 font-semibold"
                                                : "text-gray-800 hover:text-orange-500"
                                        }`}
                                    >

                                        <span>
                                            {category}
                                        </span>

                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m9 18 6-6-6-6"
                                            />
                                        </svg>

                                    </button>
                                ))}


                                {/* All Categories */}
                                <button
                                    onClick={() =>
                                        handleCategory("All Categories")
                                    }
                                    className={`w-full flex items-center justify-between py-5 transition-colors duration-200 ${
                                        selectedCategory === "All Categories"
                                            ? "text-orange-500"
                                            : "text-gray-900 hover:text-orange-500"
                                    }`}
                                >

                                    <span className="flex items-center gap-3 font-semibold">

                                        <span className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-xs">
                                            ...
                                        </span>

                                        All Categories

                                    </span>

                                    <span className="text-xl">
                                        +
                                    </span>

                                </button>

                            </div>

                        </div>

                    </aside>


                    {/* =========================
                        RIGHT SIDE - PRODUCTS
                    ========================== */}
                    <div className="flex-1">

                        {/* Top Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">

                            <p className="text-gray-600 text-sm">
                                There are{" "}
                                <span className="font-semibold text-gray-900">
                                    {filteredProducts.length}
                                </span>{" "}
                                results in total
                            </p>

                            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-orange-500">
                                <option>
                                    Alphabetically, A-Z
                                </option>
                                <option>
                                    Alphabetically, Z-A
                                </option>
                                <option>
                                    Price, low to high
                                </option>
                                <option>
                                    Price, high to low
                                </option>
                            </select>

                        </div>


                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

                            {filteredProducts.map((product) => (

                                <div
                                    key={product.id}
                                    className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                                >

                                    {/* Product Image */}
                                    <div className="relative h-[220px] bg-gray-50 rounded-xl overflow-hidden">

                                        {/* Discount */}
                                        <span className="absolute top-3 left-3 z-10 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                            {product.discount}
                                        </span>

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Quick View */}
                                        <button
                                            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-sm px-5 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                                        >
                                            Quick View
                                        </button>

                                    </div>


                                    {/* Product Details */}
                                    <div className="pt-4">

                                        <h3 className="text-sm md:text-base font-medium text-gray-800 leading-6">
                                            {product.name}
                                        </h3>


                                        {/* Price */}
                                        <div className="flex items-center gap-2 mt-2">

                                            <span className="text-orange-500 font-semibold text-base">
                                                {product.price}
                                            </span>

                                            <span className="text-gray-400 text-sm line-through">
                                                {product.oldPrice}
                                            </span>

                                        </div>


                                        {/* Bottom Actions */}
                                        <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-3">

                                            <button className="text-sm text-gray-700 hover:text-orange-500 transition">
                                                + Add to Cart
                                            </button>

                                            <div className="flex items-center gap-3">

                                                <button className="text-gray-500 hover:text-orange-500 transition">
                                                    ♡
                                                </button>

                                                <button className="text-gray-500 hover:text-orange-500 transition">
                                                    ◉
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Products;