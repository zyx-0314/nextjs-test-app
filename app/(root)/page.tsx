import { C_Header } from "@/components/elements/header/page";
import { CallToActionSection } from "@/components/sections/landing/callToAction";

import { CategorySection } from "@/components/sections/landing/category";
import { HeroSection } from "@/components/sections/landing/hero";

export default function Home() {
  return (
    <>
      <C_Header />
      <HeroSection />
      <CategorySection />
      <CallToActionSection />
    </>
  );
}
