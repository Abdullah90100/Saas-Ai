import React from 'react'
import Logo from "../../public/logo.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
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
                        <div className='flex gap-5 lg:flex-row lg:flex-1 lg:justify-center lg:items-center'>
                            <div className="flex gap-5 lg:flex-row lg:flex-1 lg:justify-center lg:items-center">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition duration-200"
                                >
                                    <FaFacebookF size={24} />
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-600 transition duration-200"
                                >
                                    <FaTwitter size={24} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 hover:text-pink-700 transition duration-200"
                                >
                                    <FaInstagram size={24} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 hover:text-blue-900 transition duration-200"
                                >
                                    <FaLinkedinIn size={24} />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-600 hover:text-red-800 transition duration-200"
                                >
                                    <FaYoutube size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer