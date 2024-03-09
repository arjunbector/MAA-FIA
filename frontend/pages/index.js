<<<<<<< HEAD
import Dashboard from "@/components/Dashboard/dashboard";
=======
import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import Blogs from "@/components/LandingPage/Blogs/Blogs";
import Dashboard from "@/components/LandingPage/Dashboard/dashboard";
>>>>>>> fcfd16ddcd22cfe2d2c64ca631115b5636178ef2
import FormSection from "@/components/LandingPage/FormSection/FormSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Blogs />
      <Dashboard />
    </main>
  );
}
