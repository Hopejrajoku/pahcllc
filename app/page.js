import AdvertMarquee from "@/components/AdvertMarquee";
import ContactMarquee from "@/components/components/ContactMarquee";
import Hero from "@/components/Hero";
import JobApplicationSection from "@/components/job";
import Navbar from "@/components/NavBar";
//import ReviewPage from "@/components/Review";
import WhoWeArePage from "@/components/Who";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactMarquee />
      <Hero />
      <AdvertMarquee />
      <JobApplicationSection />
      <WhoWeArePage />
    </div>
  );
}
