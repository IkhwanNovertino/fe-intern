import BenefitSection from "@/components/organisms/benefit-section";
import HeroSection from "@/components/organisms/hero-section";
import TopVacancies from "@/components/organisms/top-vacancies";
import LadingPageLayout from "@/layouts/landing-page";

export default function Home() {
  return (
    <LadingPageLayout>
      <div className="min-h-screen">
        <HeroSection />
        <BenefitSection />
        <TopVacancies />
      </div>
    </LadingPageLayout>
  );
}
