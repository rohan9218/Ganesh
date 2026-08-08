import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative py-2 transition-colors duration-300 ${isActive
            ? "text-orange-500 font-semibold"
            : "text-slate-900 hover:text-orange-500"
        }`;

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="hidden lg:block bg-[#071a2d] text-white">
                <div className="max-w-[1500px] mx-auto px-6 xl:px-10 h-9 flex items-center justify-between text-[13px]">

                    {/* Address */}
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-4 h-4 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                        </svg>

                        <span>
                            Guruwar Peth Rd, near भरत मेडिकल, Sangli, guruvar Peth,
                            Madhavnagar, Maharashtra 416406
                        </span>
                    </div>

                    {/* Phone */}
                    <a
                        href="tel:8183830505"
                        className="flex items-center gap-2 hover:text-orange-400 transition"
                    >
                        <svg
                            className="w-4 h-4 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                        </svg>

                        8183830505
                    </a>

                    {/* Google Rating */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                            <span className="text-blue-500">G</span>
                        </span>

                        <span className="font-semibold">4.8</span>

                        <div className="flex text-orange-400 tracking-[2px]">
                            ★★★★★
                        </div>

                        <span>14 Google reviews</span>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-[1500px] mx-auto px-5 md:px-8 xl:px-10">
                    <div className="h-[100px] flex items-center justify-between">

                        {/* ================= LOGO ================= */}
                        <Link to="/" className="flex items-center gap-3 shrink-0">

                            {/* Ganesh Symbol */}
                            <div className="w-[62px] h-[62px] flex items-center justify-center">
                                <div className="text-orange-500 text-[48px] leading-none">
                                    ॐ
                                </div>
                            </div>

                            <div>
                                <h1 className="text-[27px] md:text-[30px] font-extrabold text-orange-500 leading-[1]">
                                    Shree Ganesh
                                </h1>

                                <h2 className="text-[22px] md:text-[24px] font-bold text-[#071a2d] leading-tight">
                                    Steel Centre
                                </h2>

                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-6 h-[1px] bg-orange-500"></span>

                                    <p className="text-[10px] md:text-[11px] font-semibold text-orange-500">
                                        Wholesale & Retail Since
                                    </p>

                                    <span className="w-6 h-[1px] bg-orange-500"></span>
                                </div>
                            </div>
                        </Link>

                        {/* ================= DESKTOP LINKS ================= */}
                        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-medium">

                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>

                            <NavLink to="/about" className={navLinkClass}>
                                About Us
                            </NavLink>
                            {/* Products */}
                            <Link
                                to="/products"
                                className="flex items-center py-3 text-slate-900 hover:text-orange-500 transition"
                            >
                                Products
                            </Link>
                            <NavLink to="/services" className={navLinkClass}>
                                Services
                            </NavLink>

                            <NavLink to="/gallery" className={navLinkClass}>
                                Gallery
                            </NavLink>

                            <NavLink to="/feedback" className={navLinkClass}>
                                Feedback
                            </NavLink>

                            <NavLink to="/contact" className={navLinkClass}>
                                Contact Us
                            </NavLink>
                        </div>

                        {/* ================= NAVBAR ICONS ================= */}
                        <div className="hidden md:flex items-center gap-3">

                            {/* Search */}
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                                    <path
                                        d="m20 20-3.5-3.5"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            {/* User */}
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="8" r="4" strokeWidth="2" />
                                    <path
                                        d="M4 21c.7-4 3.4-6 8-6s7.3 2 8 6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            {/* Cart */}
                            <button className="relative w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.9a2 2 0 0 0 2-1.6L21 7H6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle cx="10" cy="20" r="1" fill="currentColor" />
                                    <circle cx="18" cy="20" r="1" fill="currentColor" />
                                </svg>

                                <span className="absolute -right-1 -top-2 bg-orange-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </button>
                        </div>

                        {/* ================= MOBILE BUTTON ================= */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200"
                            aria-label="Menu"
                        >
                            {open ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        d="M6 6l12 12M18 6 6 18"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                {open && (
                    <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
                        <div className="px-6 py-6 flex flex-col gap-4 font-medium">

                            <NavLink
                                to="/"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                About Us
                            </NavLink>

                            <NavLink
                                to="/products"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Products
                            </NavLink>

                            <NavLink
                                to="/services"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="/gallery"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Gallery
                            </NavLink>

                            <NavLink
                                to="/feedback"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Feedback
                            </NavLink>

                            <NavLink
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="hover:text-orange-500"
                            >
                                Contact Us
                            </NavLink>

                            <a
                                href="tel:8183830505"
                                className="bg-orange-500 text-white text-center py-3 rounded-lg"
                            >
                                Call: 8183830505
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;