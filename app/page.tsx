import Image from "next/image";
import {
  AboutSectionImage,
  FeaturesSectionImageOne,
  FeaturesSectionImageTwo,
  FeaturesSectionImageThree,
  DownloadSectionImage
} from '../public/images'
import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import PrincingSection from "@/components/PrincingSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavHeader/>
      <HeroSection/>
      <AboutSection/>
      <FeaturesSection/>
      <PrincingSection/>
      <DownloadSection/>
      <Footer/>
    </>
  );
}
