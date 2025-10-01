import CategorySection from "@/components/LandingPage/CategorySection/CategorySection";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خانه",
};
export default function HomePage() {
  return (
    <>
      <div className="">
        <HeroSection/>
      </div>
      <CategorySection/>
    </>
  );
}