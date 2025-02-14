import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu open/closed
    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Animation variants for the mobile menu
    const menuVariants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 },
    };

    return (
        <header className="fixed top-0 left-0 w-full z-10  bg-[#1118]">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Site Logo/Title */}
                <div className="text-xl font-bold text-white">Galaxy</div>

                {/* Desktop Navigation (hidden on mobile) */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/section" className="text-white hover:text-gray-300">
                                Section
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="text-white hover:text-gray-300">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/explor" className="text-white hover:text-gray-300">
                                Explor
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle (hamburger icon) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white"
                        >
                            {/* Hamburger Icon (Bars) */}
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.nav
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className="md:hidden overflow-hidden bg-black"
            >
                <ul className="flex flex-col space-y-4 px-4 py-4">
                    <li>
                        <Link
                            to="/about"
                            className="text-white hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/section"
                            className="text-white hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Section
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blogs"
                            className="text-white hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/explor"
                            className="text-white hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Explor
                        </Link>
                    </li>
                </ul>
            </motion.nav>
        </header>
    );
}
