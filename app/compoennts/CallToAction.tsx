import React from 'react'
import Button from './Button'
import starsBg from "../../public/stars.png"
import GridLines from "../../public/grid-lines.png"


function CallToAction() {
    return (
        <div>
            <section className='py-20 md:py-24'>
                <div className='container'>
                    <div className='border border-white/15 rounded-xl overflow-hidden py-24 relative ' style={{ backgroundImage: `url(${starsBg.src})` }}>
                        <div className='bg-blend-overlay absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]' style={{ backgroundImage: `url(${GridLines.src})` }}></div>
                        <div className='relative'>
                            <h2 className='text-5xl md:text-6xl max-w-sm  mx-auto tracking-tighter text-center font-medium '>AI-driven SEO for Everyone</h2>
                            <p className='text-center md:text-xl max-w-xs mx-auto text-white/70 px-4 text-lg mt-5  trackinf-tight'>
                                Achieve clear , imapctful results without the complexity
                            </p>
                            <div className='flex justify-center mt-8 '>
                                <Button>Join Waitlist</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallToAction
