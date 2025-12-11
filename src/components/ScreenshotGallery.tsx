import { useState } from "react";

interface GalleryProps {
  screenshots: string[];
}

export default function ScreenshotGallery({ screenshots }: GalleryProps) {
  const [mainIndex, setMainIndex] = useState(0);
  const main = screenshots[mainIndex];

  return (
    <div className="gallery">
      <img className="gallery-main" src={main} alt={`Screenshot ${mainIndex + 1}`} />

      <div className="gallery-row">
        {screenshots.map((s, index) =>
          index === mainIndex ? null : (
            <img
              key={s}
              src={s}
              className={`gallery-thumb ${main === s ? "active" : ""}`}
              onClick={() => setMainIndex(index)}
              alt={`Screenshot ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
