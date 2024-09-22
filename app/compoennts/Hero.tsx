"use client"
import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import Button from './Button'
import Stars from '../../public/stars.png'
function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        console.log("scrollYProgress", value)
    })
    const backgroundPositionY = useTransform(scrollYProgress,
        [0, 1],
        [-300, 300])
    return (
        <motion.section

            className=' h-[492px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black,_10%,black_90%,transparent)]' style={{
                backgroundImage: `url(${Stars.src})`,
                backgroundPositionY,
            }}
            animate={{
                backgroundPositionX: Stars.width,
            }}
            transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 120
            }}

        >
            <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>
            {/* start planet */}
            <div className='h-64 absolute w-64 md:h-96 md:w-96  bg-purple-500 border rounded-full border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
            {/* end planet */}

            {/* start ring 1 */}
            <motion.div style={{
                translateY: "-50%",
                translateX: "-50%"
            }} animate={{
                rotate: "1turn"
            }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className='absolute h-[344px] w-[344px] md:h-[500px] md:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 border border-white/20 rounded-full '>
                <div className='absolute h-2 w-2 left-0  top-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-full '></div>
                <div className='absolute h-2 w-2 left-1/2  top-0  -translate-x-1/2 -translate-y-1/2 bg-white rounded-full '></div>
                <div className='absolute h-5 w-5 border border-white left-full  top-1/2  -translate-x-1/2 -translate-y-1/2 inline-flex justify-center rounded-full  items-center'>
                    <div className='h-2 w-2 bg-white rounded-full'></div>
                </div>
            </motion.div>
            {/* end ring 1 */}
            {/* start ring 2 */}
            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%"
                }} animate={{
                    rotate: "-1turn"
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}

                className='absolute h-[444px] md:h-[780px] md:w-[780px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></motion.div>
            {/* end ring 2 */}
            {/* start ring 3 */}
            <motion.div
                style={{
                    translateY: "-50%",
                    translateX: "-50%"
                }} animate={{
                    rotate: "1turn"
                }}
                transition={{
                    duration: 90,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className='absolute h-[544px] md:h-[980px] md:w-[980px] w-[544px] rounded-full border opacity-20 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <div className='absolute h-2 w-2 left-0  top-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-full '></div>
                <div className='absolute h-2 w-2 left-full  top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full '></div>
            </motion.div>
            {/* end ring 3 */}

            {/* content */}
            <div className='container relative  mt-16'>
                <h1 className='text-8xl text-center md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,158,.5))] text-transparent bg-clip-text'>AI SEO</h1>
                <p className='text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center  '>Elevate Your Site Visibility effortlessly with AI , where smart technology mmets user-friendly Detection Tools</p>
                <div className='flex justify-center mt-5 '></div>
                <div className="flex justify-center mt-5">
                    <Button >
                        Join Waitlist
                    </Button >
                </div>
            </div>
            {/* contant end  */}
        </motion.section>
    )
}

export default Hero
