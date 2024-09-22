import Image from "next/image";
import Header from "./compoennts/Header"
import Hero from "./compoennts/Hero";
import LogoTicker from "./compoennts/LogoTicker";
import { Features } from "./compoennts/Features";
import Testimonials from "./compoennts/Testimonials";
import CallToAction from "./compoennts/CallToAction";
import Footer from "./compoennts/Footer";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
      </div>
    </>
  );
}
