"use client"
import React from 'react';
import acmeLogo from '../../public/logo-acme.png';
import apexLogo from '../../public/logo-apex.png';
import calestialLogo from '../../public/logo-celestial.png';
import quantumLogo from '../../public/logo-quantum.png';
import pulseLogo from '../../public/logo-pulse.png';
import echoLogo from '../../public/logo-echo.png';
import Image from 'next/image';
import {motion} from "framer-motion"
function LogoTicker() {
  const logos = [
    { src: acmeLogo, alt: 'Acme Logo' },
    { src: apexLogo, alt: 'Apex Logo' },
    { src: calestialLogo, alt: 'Celestial Logo' },
    { src: quantumLogo, alt: 'Quantum Logo' },
    { src: echoLogo, alt: 'Echo Logo' },
    { src: acmeLogo, alt: 'Acme Logo' },
    { src: apexLogo, alt: 'Apex Logo' },
    { src: calestialLogo, alt: 'Celestial Logo' },
    { src: quantumLogo, alt: 'Quantum Logo' },
    { src: echoLogo, alt: 'Echo Logo' },
  ];

  return (
    <section className='py-20 md:py-24 '>
      <div className='container'>
        <div className='flex items-center'>
          <div className='flex-1 md:flex-none'>
            <h2>Trusted by Top Innovative Teams</h2>
          </div>
          <div>
          <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
            <motion.div
            initial={{translateX:"-50%"}}
            animate={{translateX:"0"}}
            transition={{
              repeat:Infinity,
              ease:"linear",
              duration:"20"

            }}
            className='flex flex-none gap-14 -translate-x-1/2 '>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={100} // Set appropriate width
                  height={50} // Set appropriate height
                  className="object-contain h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
