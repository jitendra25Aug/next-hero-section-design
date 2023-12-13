"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

/**
 * DISPLAYS THE HERO SECTION OF A PAGE
 */

const Hero = () => {
    return (
        <div className="flex justify-center items-center px-4 pt-6 xl:pt-8 pb-2 h-full">
            <div className="grid grid-cols-1 gap-20 h-full w-full max-w-7xl z-10 xl:grid-cols-2 xl:gap-6">
                <HeroContent />
                <HeroImage />
            </div>
            <motion.div initial={{ opacity: 0.001, scale: 0.95, translateX: 8 }} animate={{ opacity: 1, scale: 1, translateX: 0 }}
                transition={{ delay: 0.05, duration: 1 }}
                className="hidden lg:block absolute rounded-2xl -z-10 side-gradient-container overflow-hidden">
                <img src="/images/side_gradient.png" alt="gradient background color"
                    className="block w-full h-full rounded-2xl object-center object-cover"
                />
            </motion.div>
        </div>
    );
}

export default Hero;