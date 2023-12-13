import { motion } from "framer-motion";
import SocialDetails from "./SocialDetails";

/**
 * @returns REACT ELEMENT WHICH DISPLAYS PAGE HEADING AND SOCIAL INFORMATION
 */

const HeroContent = () => {
    return (
        <motion.div initial={{ opacity: 0, translateY: 32 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 1.25, duration: 0.9 }}
            className="justify-self-center flex flex-col gap-10 h-auto w-full justify-start max-w-2xl overflow-hidden text-center xl:text-left xl:justify-self-start ">
            <div className="flex flex-col gap-6 justify-center items-center xl:items-start overflow-hidden w-full h-min">
                <div>
                    <p className="text-sm py-3 px-4 bg-white border border-zinc-400 rounded-full">Financal Management</p>
                </div>
                <div className="h-min w-full flex flex-col justify-start gap-3">
                    <h1 className="font-aventa text-5xl lg:font-88 font-normal tracking-normal">
                        A simpler, <br /> smarter basic <br /> credit <span className="gradient-1">card.</span>
                    </h1>
                    <p className="text-base text-slate-600 text-center xl:text-left">
                        Your powerful companion on the road to financial success! Explore <br/> personal budget management, investment opportunities.
                    </p>
                </div>
            </div>
            <SocialDetails />
        </motion.div>
    );
}
// background-image:linear-gradient(284deg, rgb(103, 233, 240) 0%, rgb(167, 133, 254) 100%)
export default HeroContent;