import { HeroSection } from "@/features/home/components/HeroSection";
import { FeaturesSection } from "@/features/home/components/FeaturesSection";
import { CategoriesSection } from "@/features/home/components/CategoriesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
    </div>
  );
}
