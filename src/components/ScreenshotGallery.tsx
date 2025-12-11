import { useRef, useState, useEffect } from "react";

interface GalleryProps {
  screenshots: string[];
}

export default function ScreenshotGallery({ screenshots }: GalleryProps) {
  const [mainIndex, setMainIndex] = useState(0);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);

  // current + target tilt/glare values (for inertia)
  const tiltRef = useRef({
    x: 0,
    y: 0,
    glareX: 50,
    glareY: 50,
    intensity: 0,
  });
  const targetRef = useRef({
    x: 0,
    y: 0,
    glareX: 50,
    glareY: 50,
    intensity: 0,
  });

  const MAX_TILT = 12; // degrees

  const animate = () => {
    const tilt = tiltRef.current;
    const target = targetRef.current;
    const ease = 0.12; // inertia strength

    tilt.x += (target.x - tilt.x) * ease;
    tilt.y += (target.y - tilt.y) * ease;
    tilt.glareX += (target.glareX - tilt.glareX) * ease;
    tilt.glareY += (target.glareY - tilt.glareY) * ease;
    tilt.intensity += (target.intensity - tilt.intensity) * ease;

    if (cardRef.current) {
      cardRef.current.style.transform = `
        rotateX(${tilt.x}deg)
        rotateY(${tilt.y}deg)
        translateZ(18px)
      `;
    }

    if (glareRef.current) {
      const opacity = 0.15 + 0.4 * tilt.intensity;
      glareRef.current.style.opacity = opacity.toString();
      glareRef.current.style.background = `
        radial-gradient(
          circle at ${tilt.glareX}% ${tilt.glareY}%,
          rgba(255,255,255,0.85),
          transparent 55%
        )
      `;
    }

    // Keep animating until we're basically at rest
    if (
      Math.abs(target.x - tilt.x) > 0.01 ||
      Math.abs(target.y - tilt.y) > 0.01 ||
      Math.abs(target.intensity - tilt.intensity) > 0.01
    ) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      animRef.current = null;
    }
  };

  const startAnimationLoop = () => {
    if (!animRef.current) {
      animRef.current = requestAnimationFrame(animate);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Disable tilt on touch
    if (e.pointerType === "touch") return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalised -1..1 (0,0 in center)
    const normX = (centerX - x) / centerX; // left/right
    const normY = (centerY - y) / centerY; // top/bottom

    targetRef.current = {
      x: -normY * MAX_TILT, // tilt away from cursor vertically
      y: -normX * MAX_TILT, // tilt away horizontally
      glareX: 50 + normX * -20, // move glare opposite for nice parallax
      glareY: 50 + normY * -20,
      intensity: Math.min(1, Math.hypot(normX, normY)),
    };

    startAnimationLoop();
  };

  const handlePointerLeave = () => {
    // Smoothly ease back to flat
    targetRef.current = {
      x: 0,
      y: 0,
      glareX: 50,
      glareY: 50,
      intensity: 0,
    };
    startAnimationLoop();
  };

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const main = screenshots[mainIndex];

  return (
    <div className="gallery">
      <div className="hero-tilt-wrap">
        <div
          ref={cardRef}
          className="hero-shot"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {/* glow behind is still in CSS ::before */}
          <img
            className="gallery-main"
            src={main}
            alt={`Screenshot ${mainIndex + 1}`}
          />
          {/* moving glare on top */}
          {/* <div ref={glareRef} className="hero-glare" /> */}
        </div>
      </div>

      <div className="gallery-row">
        {screenshots.map((s, index) =>
          index === mainIndex ? null : (
            <img
              key={s}
              src={s}
              className={`gallery-thumb ${index === mainIndex ? "active" : ""}`}
              onClick={() => setMainIndex(index)}
              alt={`Screenshot ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
