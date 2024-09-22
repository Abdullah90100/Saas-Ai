"use client"
import React, { RefObject, useEffect, useRef } from 'react'
import Button from './Button'
import starsBg from "../../public/stars.png"
import GridLines from "../../public/grid-lines.png"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"

// Function to get relative mouse position
const relativeMousePosition = (to: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const mouseUpdate = (event: MouseEvent) => {
        if (!to.current) return;
        const { top, left } = to.current.getBoundingClientRect();
        mouseX.set(event.clientX - left)
        mouseY.set(event.clientY - top)
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseUpdate)
        return () => {
            window.removeEventListener('mousemove', mouseUpdate)
        }
    }, [to])

    return [mouseX, mouseY]
}

function CallToAction() {
    const sectionRef = useRef<HTMLElement>(null)
    const borderedDivRef = useRef<HTMLDivElement>(null)

    // Scroll-based background animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

    // Mouse-following effect
    const [mouseX, mouseY] = relativeMousePosition(borderedDivRef)
    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`

    return (
        <section className='py-20 md:py-24'>
            <div className='container'>
                <motion.div
                    ref={borderedDivRef}
                    className='border border-white/15 rounded-xl overflow-hidden py-24 relative group'
                    style={{
                        backgroundPositionY,
                        backgroundImage: `url(${starsBg.src})`
                    }}
                    animate={{
                        backgroundPositionX: starsBg.width,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear"
                    }}
                >
                    {/* Grid lines with overlay */}
                    <div
                        className='bg-blend-overlay absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition-700'
                        style={{
                            backgroundImage: `url(${GridLines.src})`
                        }}
                    >
                    </div>
                    {/* Mouse-following grid lines */}
                    <motion.div
                        className='bg-blend-overlay absolute inset-0 bg-[rgb(74,32,138)] opacity-0 group-hover:opacity-100 transition-700'
                        style={{
                            maskImage,
                            backgroundImage: `url(${GridLines.src})`
                        }}
                    >
                    </motion.div>
                    
                    {/* Content */}
                    <div className='relative'>
                        <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>
                            AI-driven SEO for Everyone
                        </h2>
                        <p className='text-center md:text-xl max-w-xs mx-auto text-white/70 px-4 text-lg mt-5 tracking-tight'>
                            Achieve clear, impactful results without the complexity
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Button>Join Waitlist</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CallToAction
