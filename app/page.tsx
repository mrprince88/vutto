import { Header } from "@/components/HeaderComponent";
import { Breadcrumb } from "@/components/BreadcrumbComponent";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { StoriesSection } from "@/components/StoriesSection";
import { FAQSection } from "@/components/FaqSection";
import { HelpSection } from "@/components/HelpSection";
import { Footer } from "@/components/FooterComponent";
import BottomNavigation from "@/components/BottomNavigation";

export default function ZuttoMarketplace() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      <HeroSection />
      <HowItWorks />
      <StoriesSection />
      <FAQSection />
      <HelpSection />
      <Footer />
      <BottomNavigation />
    </div>
  );
}
