"use client"

import { CallToActionSection } from "@/components/sections/landing/callToAction";
import { CategorySection } from "@/components/sections/landing/category";
import { DisplayCatalog } from "@/components/sections/landing/displayCatalog";
import { HeroSection } from "@/components/sections/landing/hero";
import { PromotionSection } from "@/components/sections/landing/promotion";
import { ReviewSection } from "@/components/sections/landing/review";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <DisplayCatalog />
      <CallToActionSection />
      <ReviewSection />
      <PromotionSection />
    </>
  );
}
