import DemoSection from "@/components/ui/demo";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Demo() {
  return (
    <div className="h-full bg-gray-200">
      <Header />
      <DemoSection />
      <Footer/>
    </div>
  );
}
