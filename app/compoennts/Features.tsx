"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import React, { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import productImage from '../../public/product-image.png';
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import { base } from "framer-motion/client";

const tabs = [
  {
    src: "https://lottie.host/2ab2ef48-46fd-461a-8a13-773428c2738c/Xu1dxZMntd.json",
    title: "User Friendly Dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    src: "https://lottie.host/10908127-906d-42f6-a7d4-ca8ba5db0af7/1Vu07eWmOG.json",
    title: "One click optimizations",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    src: "https://lottie.host/2d8a19ad-bff7-42e1-a9c5-3e241e28874a/wj4JwVALB9.json",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: (typeof tabs)[number] & ComponentPropsWithRef<"div"> & { selected: boolean }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotlottieRef = useRef<any>(null);

  const Xpercentage = useMotionValue(0);
  const Ypercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${Xpercentage}% ${Ypercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    Xpercentage.set(0);
    Ypercentage.set(0);
    const { height, width } = tabRef.current.getBoundingClientRect();
    const perimeter = 2 * (height + width);

    const times = [
      0,
      width / perimeter,
      (width + height) / perimeter,
      (width * 2 + height) / perimeter,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      ease: "linear",
      repeatType: "loop",
      repeat: Infinity,
    };

    animate(Xpercentage, [0, 100, 100, 0, 0], options);
    animate(Ypercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotlottieRef.current) {
      dotlottieRef.current.seek(0);
      dotlottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (dotlottieRef.current) {
      dotlottieRef.current.pause();
    }
  };

  return (
    <div
      ref={tabRef}
      onClick={props.onClick}
      onMouseEnter={handleTabHover}
      onMouseLeave={handleMouseLeave}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative"
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px border border-[#a369ff] rounded-xl"
        />
      )}
      <div className="h-12 w-12 border rounded-lg border-white/15 inline-flex items-center justify-center">
        <DotLottiePlayer
          src={props.src}
          className="h-10 w-10"
          ref={dotlottieRef}
          loop
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="flex text-xs text-center rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const scale = useMotionValue(1);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);
    const animateOptions: ValueAnimationTransition = {
      duration:2.4,
      ease: "easeInOut",
    };

    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX], animateOptions);
    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY], animateOptions);
    animate(backgroundSizeX, [backgroundSizeX.get(), tabs[index].backgroundSizeX], animateOptions);


  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl mx-auto max-w-2xl tracking-tight text-center mt-5">
          From all small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              key={tab.title}
              onClick={() => handleSelectedTab(tabIndex)}
            />
          ))}
        </div>

        <motion.div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition:backgroundPosition,
              backgroundSize:backgroundSize,
              backgroundImage: `url(${productImage.src})`
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
