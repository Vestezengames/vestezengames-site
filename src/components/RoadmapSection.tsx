// RoadmapSection.tsx
const RoadmapSection: React.FC = () => {
  return (
    <section className="home-section">
      <h2>Roadmap Highlights</h2>
      <p>
        The game will keep evolving over time. Some of the ideas I’m exploring:
      </p>
      <ul className="bulleted-list">
        <li>New spells and build-defining upgrades.</li>
        <li>More unique gear and potential set bonuses.</li>
        <li>Extra late-game progression layers for long-term players.</li>
        <li>Event-style challenges and special limited-time bonuses.</li>
      </ul>
      <p className="small-note">
        Plans may change based on feedback and what players enjoy the most,
        but the goal stays the same: more ways to progress and more meaningful
        choices.
      </p>
    </section>
  );
};

export default RoadmapSection;
