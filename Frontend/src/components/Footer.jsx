import { Link } from "react-router-dom";
import FooterLogo from "../assets/FooterLogo.png";

const Footer = () => {
    return (
        <footer className="bg-[#061a2d] text-white">

            {/* =====================================================
                MAIN FOOTER
            ====================================================== */}
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 py-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">

                    {/* =================================================
                        COMPANY INFO
                    ================================================== */}
                    <div>

                        <Link to="/" className="inline-block">
                            <img
                                src={FooterLogo}
                                alt="Shree Ganesh Steel Centre"
                                className="w-[190px] h-auto object-contain"
                            />
                        </Link>

                        <p className="text-gray-300 text-sm leading-5 mt-3 max-w-[260px]">
                            Your trusted partner for premium stainless steel
                            utensils and kitchenware. Wholesale & Retail
                            service for every need.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 mt-4">

                            {/* Facebook */}
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="M9 8.5c.3-.3.6-.2.8.1l.8 1.2c.2.3.2.6 0 .8l-.5.5c.7 1.2 1.6 2.1 2.8 2.8l.5-.5c.2-.2.5-.2.8 0l1.2.8c.3.2.4.5.1.8-.5.6-1.2.9-1.9.7-2.8-.8-5-3-5.8-5.8-.2-.7.1-1.4.7-1.9Z"
                                    />
                                </svg>
                            </a>

                            {/* WhatsApp Green */}
                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="M9 8.5c.3-.3.6-.2.8.1l.8 1.2c.2.3.2.6 0 .8l-.5.5c.7 1.2 1.6 2.1 2.8 2.8l.5-.5c.2-.2.5-.2.8 0l1.2.8c.3.2.4.5.1.8-.5.6-1.2.9-1.9.7-2.8-.8-5-3-5.8-5.8-.2-.7.1-1.4.7-1.9Z"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>


                    {/* =================================================
                        QUICK LINKS
                    ================================================== */}
                    <div>

                        <h3 className="text-white font-bold text-sm uppercase mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/gallery"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* =================================================
                        PRODUCTS
                    ================================================== */}
                    <div>

                        <h3 className="text-white font-bold text-sm uppercase mb-4">
                            Products
                        </h3>

                        <ul className="space-y-2">

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Stainless Steel Utensils
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Kitchen Steel Utensils
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Steel Plates
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Steel Bowls
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Steel Glasses
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Steel Jars
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* =================================================
                        CUSTOMER SERVICE
                    ================================================== */}
                    <div>

                        <h3 className="text-white font-bold text-sm uppercase mb-4">
                            Customer Service
                        </h3>

                        <ul className="space-y-2">

                            <li>
                                <Link
                                    to="/faq"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shipping-policy"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Shipping Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/return-policy"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Return Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/terms"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div >

                        <div className="lg:col-span-3"></div>

                        <div>

                            <h3 className="text-white font-bold text-sm uppercase mb-4">
                                Contact Us
                            </h3>

                            {/* Address */}
                            <div className="flex items-start gap-3 mb-3">

                                <svg
                                    className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                                </svg>

                                <p className="text-gray-300 text-sm leading-5">
                                    Guruwar Peth Rd, near sach
                                    <br />
                                    Sangli, Guruwar Peth,
                                    <br />
                                    Madhavnagar, Maharashtra 416406
                                </p>

                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 mb-3">

                                <svg
                                    className="w-5 h-5 text-orange-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.3 21 3 12.7 3 2.7c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .9-.2 1.2l-2.2 2.2Z" />
                                </svg>

                                <a
                                    href="tel:8183830505"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                                >
                                    8183830505
                                </a>

                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">

                                <svg
                                    className="w-5 h-5 text-orange-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.5-.5a.5.5 0 0 0-.3.1L12 11l7.8-5.9a.5.5 0 0 0-.3-.1h-15ZM20 7l-7.4 5.5a1 1 0 0 1-1.2 0L4 7v11.5c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7Z" />
                                </svg>

                                <a
                                    href="mailto:shreeganeshsteelcentre@gmail.com"
                                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors break-all"
                                >
                                    shreeganeshsteelcentre@gmail.com
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    CONTACT SECTION
                ====================================================== */}


            </div>


            {/* =====================================================
                COPYRIGHT
            ====================================================== */}
            <div className="border-t border-gray-700">

                <div className="max-w-[1500px] mx-auto px-5 md:px-8 py-2.5">

                    <p className="text-gray-300 text-xs md:text-sm text-center">
                        © 2025 Shree Ganesh Steel Centre. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;