import React from 'react';
import LogoIcon from "../../public/logo.svg";
import MenuIcon from "..//../public/icon-menu.svg";
import Link from 'next/link';
import Button from './Button';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
function Header() {
    return (
        <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10 '>
            <div className='absolute inset-0 backdrop-blur md:backdrop-blur-none -z-10'></div>
            <div className='container'>
                <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative'>
                    <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
                    <div>
                        <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                            <LogoIcon className="h-8 w-8" />
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-white/90 hover:text-white transition text-sm '>
                            <Link href="" className=' text-white/90 hover:text-white transition'>Features</Link>
                            <Link href="" className=' text-white/90 hover:text-white transition'>Developers</Link>
                            <Link href="" className=' text-white/90 hover:text-white transition'>Pricing</Link>
                            <Link href="" className=' text-white/90 hover:text-white transition'>Change-Log</Link>
                        </nav>
                    </div>
                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button >
                          Try Now
                        </Button  >
                        <MenuIcon className="md:hidden" />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
