import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import EventGallery from "@/components/sections/EventGallery";
import ManagementBoard from "@/components/sections/ManagementBoard";
import WhyJoinUs from "@/components/sections/WhyJoinUs";
import Partners from "@/components/sections/Partners";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Announcements from "@/components/sections/Announcements";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <UpcomingEvents />
      <EventGallery />
      <ManagementBoard />
      <WhyJoinUs />
      <Partners />
      <InstagramFeed />
      <Announcements />
      <FAQ />
      <Contact />
    </>
  );
}
