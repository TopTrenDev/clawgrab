import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PacksSection from "@/components/PacksSection";
import HowItWorks from "@/components/HowItWorks";
import RecentPulls from "@/components/RecentPulls";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PacksSection />
      <HowItWorks />
      <RecentPulls />
      <Footer />
    </div>
  );
};

export default Index;
