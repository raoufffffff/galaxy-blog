import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        // Handler to update scroll position state
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup: Remove event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate the opacity and clamp it between 0 and 1
    const computedOpacity = Math.max(0, Math.min(1, 1 - scroll / 700));

    return (
        <section className="min-h-dvh min-w-screen relative overflow-hidden bg-gradient-to-b from-black to-transparent">
            <video
                src={'/vedoi/home.mp4'}
                loop
                autoPlay
                muted
                style={{ opacity: computedOpacity }}
                className="object-cover min-h-screen w-full"
            />

            {/* Overlay animated text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
            >
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                    Explore the Space with Us
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4">
                    Learn more about the universe and unravel its mysteries.
                </p>
                <p className="text-white text-base md:text-lg mt-2">
                    Welcome to our blog, where we journey through cosmic wonders and share insights about the cosmos.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
