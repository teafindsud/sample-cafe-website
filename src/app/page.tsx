import HeroCanvas from "@/components/HeroCanvas";
import ProductSection from "@/components/ProductSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main
      className="relative selection:bg-accent selection:text-white"
      style={{ background: "#120B06" }}
    >
      {/* Hero Section – 3D Interactive */}
      <HeroCanvas />

      {/* Remaining Sections */}
      <div className="relative z-10">
        <ProductSection />
        <FeatureSection />
        <TestimonialSection />
        <FinalCTA />
      </div>
    </main>
  );
}
