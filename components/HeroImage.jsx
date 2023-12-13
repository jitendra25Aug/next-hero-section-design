import { motion } from "framer-motion";

/**
 * @returns REACT ELEMENT WHICH DISPLAYS MOBILE IMAGE USED IN THE UI
 */

const HeroImage = () => {
    return (
        <div className="self-end justify-self-start flex justify-center items-end w-full h-min relative overflow-hidden">
            <div className="relative flex justify-center items-center">
                <div className="absolute bottom-0 left-2 right-2 h-48 overflow-hidden z-10 gradient-2"></div>
                <motion.div initial={{ opacity: 0, translateY: 150, scale: 0.9, rotateX: 20 }}
                    whileInView={{ opacity: 1, translateY: 0, scale: 1, rotateX: 0 }} transition={{ delay: 1.1, duration: 1 }}
                    viewport={{ once: true}}
                    className="relative mobile_img">
                    <div className="absolute top-0 bottom-0 left-0 right-0">
                        <img src="/images/Mobile_small.png" alt="mobile"
                            srcSet="/images/Mobile_small.png 400w, /images/Mobile_small.png 636w, /images/Mobile_small.png 848w"
                            sizes="100vw"
                            className="block w-full h-full object-center object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default HeroImage;