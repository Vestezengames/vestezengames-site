import { GooglePlayButton } from "react-mobile-app-button";

const APK_URL =
  "https://play.google.com/store/apps/details?id=com.VestezenGames.IdleWizardMagicAscension";

const DownloadSection: React.FC = () => {
  return (
    <div className="download-section">
      <GooglePlayButton url={APK_URL} theme="dark" width={220} />
    </div>
  );
};

export default DownloadSection;
