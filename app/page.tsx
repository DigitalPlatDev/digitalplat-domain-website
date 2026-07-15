import { Blog } from "@/components/Blog";
import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Features />
      <Stats />
      <CallToAction />
      <Blog />
    </div>
  );
}
