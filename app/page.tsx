import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import StepsSection from "@/components/StepsSection";
import LoanSummarySection from "@/components/LoanSummarySection";
import ByTheNumbersSection from "@/components/ByTheNumbersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StepsSection />
      <FeatureSection />
      <LoanSummarySection />
      <ByTheNumbersSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}