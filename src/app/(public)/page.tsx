import AboutDelta from "@/components/LandingPage/AboutDelta/AboutDelta";
import BuySellNewBuilding from "@/components/LandingPage/BuySellNewBuilding/BuySellNewBuilding";
import CategorySection from "@/components/LandingPage/CategorySection/CategorySection";
import DeltaOffers from "@/components/LandingPage/DeltaOffers/DeltaOffers";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import RentBuildingSection from "@/components/LandingPage/RentBuildingSection/RentBuildingSection";
import UserComments from "@/components/LandingPage/UserComments/UserComments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خانه",
};
export default function HomePage() {
  return (
    <>
    <div className="relative -top-[4.8rem]">
      <HeroSection />
    </div>
      <CategorySection />
      <DeltaOffers />
      <RentBuildingSection />
      <AboutDelta />
      <BuySellNewBuilding />
      <UserComments />
    </>
  );
}