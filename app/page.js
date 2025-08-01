import ContactMarquee from "@/components/components/ContactMarquee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import ReviewPage from "@/components/Review";
import WhoWeArePage from "@/components/Who";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactMarquee />
      <Hero />
      <ReviewPage />
      <WhoWeArePage />
      <Footer />
    </div>
  );
}
