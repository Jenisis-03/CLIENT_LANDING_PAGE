"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import Service from "@/components/Service";
import FAQ from "@/components/FAQ";
import Blog from "../components/Blog";
export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <Service />
      <Blog />
      <FAQ />
      
      
    </>
  );
}
