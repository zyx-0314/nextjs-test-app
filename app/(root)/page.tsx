import { CategorySection } from "@/components/sections/landing/category";
import { DisplayCatalog } from "@/components/sections/landing/displayCatalog";
import { HeroSection } from "@/components/sections/landing/hero";

export default function Home() {
  return (
    <>

      <HeroSection />
      <CategorySection />
      <DisplayCatalog />
    </>
  );
}
