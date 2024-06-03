import NavBar from "@/components/common/NavBar";
import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import RoomSection from "@/components/sections/RoomSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <BrowseTheRangeSection />
      <OurProductSection />
      <RoomSection />
      <ShareSetupSection />
      <FooterSection />
    </main>
  );
}
