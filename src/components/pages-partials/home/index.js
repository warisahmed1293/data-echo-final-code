import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero";
import HowItWorks from "@/components/ui/howItWorks";
import IntroductionSection from "@/components/ui/intro";


export default function Home() {
  return (
    <div className="h-full bg-gray-200">
      <Header />
      <HeroSection />
      <IntroductionSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}
