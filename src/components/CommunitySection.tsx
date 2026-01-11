import { FaDiscord } from "react-icons/fa";

// CommunitySection.tsx
const CommunitySection: React.FC = () => {
  return (
    <section className="home-section">
      <h2>Community & Feedback</h2>

      <p>
        I’m always interested in how the game feels to play – what’s fun,
        what’s annoying, and what you’d like to see next.
      </p>

      <p>
        Join the official Discord to share feedback, report bugs, suggest
        features, and follow development updates.
      </p>

      <a
        href="https://discord.gg/fRTTV2DnyR"
        target="_blank"
        rel="noopener noreferrer"
        className="discord-icon-link"
        aria-label="Join Discord"
      >
        <FaDiscord size={100} />
      </a>

      <p style={{ marginTop: "1rem" }}>
        You can also support the game by leaving a review on Google Play or
        sharing it with a friend 
      </p>
    </section>
  );
};

export default CommunitySection;
