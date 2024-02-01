import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Inter_Tight } from "next/font/google";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CustomFooter from "./components/CustomFooter";

const inter = Inter_Tight({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} bg-[#FFEDEA]`}>
      <HeroSection className=''/>
      <Features/>
      <WhyUs/>
      <HowItWorks/>
      <Testimonials/>
      <CustomFooter/>
    </div>
  );
}
