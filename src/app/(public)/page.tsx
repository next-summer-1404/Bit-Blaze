import { Metadata } from "next";
import Image from "next/image";
import LandingPageBannerBackground from '../../assets/Images/LandingPageBannerBackground.png'
export const metadata: Metadata = {
  title: "خانه",
};
export default function HomePage() {
  return (
    // <div className="absolute w-full h-full top-[0] z-[998]" >
    <div>
      <Image fill className="object-cover" src={LandingPageBannerBackground} alt="LandingPageBanner"></Image>
      sdsad
    </div>
  );
}