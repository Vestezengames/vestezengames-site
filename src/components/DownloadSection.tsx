import { GooglePlayButton } from "react-mobile-app-button";

export default function DownloadSection() {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.VestezenGames.IdleWizardMagicAscension";

  return (
    <section className="download-section">
      <GooglePlayButton
        url={APKUrl}
        theme="dark"
        className="store-cta"
      />
    </section>
  );
}
