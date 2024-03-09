import Dashboard from "@/components/LandingPage/Dashboard/dashboard";
import FormSection from "@/components/LandingPage/FormSection/FormSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <FormSection/>
      <Dashboard/>
    </main>
  );

}
