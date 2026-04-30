import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Screenshots from "@/components/screenshots";
import DeveloperCredit from "@/components/developer-credit";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="gradient min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
      <Pricing />
      <Testimonials />
      <DeveloperCredit />
      <Footer />
    </main>
  );
}
