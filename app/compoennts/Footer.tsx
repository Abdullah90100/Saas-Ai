import React from 'react'
import Logo from "../../public/logo.svg"
import Xsocial from "../../public/social-x.svg"
import Instasocial from "../../public/social-instagram.svg"
import Ytsocial from "../../public/social-youtube.svg"
import Link from 'next/link'
function Footer() {
    return (
        <div>
            <footer className='border border-white/15 p-2'>
                <div className='container'>
                    <div className='flex gap-8 flex-col lg: lg:flex-row'>
                        <div className='flex gap-2 lg:items-center lg:flex-1 '>
                            <Logo className="h-6 w-6" />
                            <div className='font-medium'>AI StartUp Landing Page</div>
                        </div>
                        <div>
                            <nav className='flex  lg:flex-row flex-col lg:gap-7 gap-5 lg:flex-1 lg:justify-center
                            '>
                              <Link href="" className='text-white/70 hover:text-white text-xs md:text-sm'>Feature </Link>
                                <Link href="" className='text-white/70 hover:text-white text-xs md:text-sm'>Developers</Link>
                                <Link href="" className='text-white/70 hover:text-white text-xs md:text-sm'>Company</Link>
                                <Link href="" className='text-white/70 hover:text-white text-xs md:text-sm'>Blogs</Link>
                                <Link href="" className='text-white/70 hover:text-white  className="text-white/40 text-xs transition'>Change Log</Link>
                            </nav>
                        </div>
                        <div className='flex gap-5  lg:flex-row  lg:flex-1 lg:justify-end'>
                            <Xsocial  className="text-white/40 hover:text-white transition"/>
                            <Instasocial className="text-white/40 hover:text-white transition" />
                            <Ytsocial  className="text-white/40 hover:text-white transition"/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
