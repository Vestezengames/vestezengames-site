import Hero from "../components/Hero";
import ScreenshotGallery from "../components/ScreenshotGallery";
import FeatureGrid from "../components/FeatureGrid";
import DownloadSection from "../components/DownloadSection"; 
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <div className="landing">
      <div className="landing-inner">
        <Hero />

        <ScreenshotGallery
          screenshots={[
            "/Screenshots/Screenshot1.png",
            "/Screenshots/Screenshot2.png",
            "/Screenshots/Screenshot4.png",
            "/Screenshots/Screenshot5.png",
          ]}
        />
        <DownloadSection/>
        <FeatureGrid /> 
        <CommunitySection />
      </div>
    </div>
  );
}
