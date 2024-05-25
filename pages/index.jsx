import HeroSection from "@/components/organisms/hero-section";
import LadingPageLayout from "@/layouts/landing-page";

export default function Home() {
  return (
    <LadingPageLayout>
      <div className="min-h-screen">
        <HeroSection />
      </div>
    </LadingPageLayout>
  );
}
