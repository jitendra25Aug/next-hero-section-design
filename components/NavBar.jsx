"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

/**
 * @returns REACT ELEMENT WHICH CONTAINS THE UI NAVIGATION BAR
 */

const NavBar = () => {
    const [isActive, setActive] = useState(false);
    return (
        <motion.nav initial={{ opacity: 0.001 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, type: "just" }}
            className="flex flex-col justify-start items-start gap-8 h-min py-4 px-2 lg:py-6 lg:px-4 xl:py-10 xl:px-6 w-full xl:flex-row xl:items-center xl:justify-between xl:gap-0"
        >

            <div className="flex justify-between items-center w-full xl:w-auto">
                <Link href="/"><img src="/images/logo.svg" alt="company logo" /></Link>
                <div className="xl:hidden">
                    <div className="border border-slate-200 rounded-full flex items-start justify-start p-2 relative w-min cursor-pointer"
                        onClick={() => { setActive(!isActive) }}>
                        <div className="flex flex-col items-center justify-center gap-1 h-6 w-6 relative">
                            <div className={`${isActive ? 'toggle-btn-line toggle-btn-active rotate-45' : 'toggle-btn-line rotate-0'} transition-transform duration-0`}></div>
                            {!isActive && <div className='toggle-btn-line'></div>}
                            <div className={`${isActive ? 'toggle-btn-line toggle-btn-active -rotate-45' : 'toggle-btn-line rotate-0'} transition-transform duration-0`}></div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className={`${isActive ? "flex" : "hidden xl:flex"} flex-col justify-start items-start gap-3 w-full xl:w-min h-min xl:flex-row`}>
                <li className="w-full"><Link href="#" className="w-full inline-block py-2 px-4 text-sm text-left xl:text-center leading-6 hover:bg-gray-100 hover:rounded-3xl">Product</Link></li>
                <li className="w-full"><Link href="#" className="w-full inline-block py-2 px-4 text-sm text-left xl:text-center leading-6 hover:bg-gray-100 hover:rounded-3xl">Compare</Link></li>
                <li className="w-full"><Link href="#" className="w-full inline-block py-2 px-4 text-sm text-left xl:text-center leading-6 hover:bg-gray-100 hover:rounded-3xl">Pricing</Link></li>
                <li className="w-full"><Link href="#" className="w-full inline-block py-2 px-4 text-sm text-left xl:text-center leading-6 hover:bg-gray-100 hover:rounded-3xl">Contact</Link></li>
            </ul>

            <div className={`${isActive ? "flex" : "hidden xl:flex"} justify-center items-center gap-4 h-min`}>
                <Button classNames={"border border-black bg-transparent hover:bg-black hover:text-white transition-all"} url="#" >Login</Button>
                <Button classNames="flex justify-center items-center gap-1 border-transparent bg-black text-white hover:bg-gray-900" url="#">
                    <p>Let's Talk</p>
                    <img src="/images/arrow.svg" alt="image of an arrow pointer" />
                </Button>
            </div>
        </motion.nav>
    );
}
export default NavBar;