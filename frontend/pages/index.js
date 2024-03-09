import Dashboard from "@/components/Dashboard/dashboard";
import FormSection from "@/components/LandingPage/FormSection/FormSection";
import HeroSection from "@/components/LandingPage/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FormSection/>
      <Dashboard/>
    </main>
  );

}
