import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import PastEvents from "@/components/sections/PastEvents";
import ManagementBoard from "@/components/sections/ManagementBoard";
import WhyJoinUs from "@/components/sections/WhyJoinUs";
import Partners from "@/components/sections/Partners";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <UpcomingEvents />
      <PastEvents />
      <ManagementBoard />
      <WhyJoinUs />
      <Partners />
      <InstagramFeed />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
