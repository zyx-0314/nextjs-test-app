import { C_Header } from "@/components/elements/header/page";

import { HeroSection } from "@/components/sections/landing/hero";
import { CategorySection } from "@/components/sections/landing/category";
import { PromotionSection } from "@/components/sections/landing/promotion";

export default function Home() {
  return (
    <>
      <C_Header />
      <HeroSection />
      <CategorySection />
      <PromotionSection />
    </>
  );
}
