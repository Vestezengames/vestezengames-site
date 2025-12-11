import type React from "react";

interface PhoneMockupProps {
  imageSrc: string;
  alt?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageSrc, alt }) => {
  return (
    <div className="phone-mockup">
      <div className="phone-body">
        <div className="phone-camera" />
        <div
          className="phone-screen"
          style={{ backgroundImage: `url(${imageSrc})` }}
          aria-label={alt}
        />
        <div className="phone-home-bar" />
      </div>
    </div>
  );
};

export default PhoneMockup;
