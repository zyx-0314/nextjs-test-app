import { C_Header } from "@/components/elements/header/page";

import { CategorySection } from "@/components/sections/landing/category";
import { DisplayCatalog } from "@/components/sections/landing/displayCatalog";
import { HeroSection } from "@/components/sections/landing/hero";

export default function Home() {
  return (
    <>
      <C_Header />
      <HeroSection />
      <CategorySection />
      <DisplayCatalog />
    </>
  );
}
