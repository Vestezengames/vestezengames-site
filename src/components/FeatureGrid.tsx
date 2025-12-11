const features = [
  {
    title: "Idle Progression",
    tagline: "Progress that never stops.",
    description:
      "Earn gold, defeat enemies, and grow stronger — even while you're offline.",
  },
  {
    title: "Gear & Loot Chests",
    tagline: "Chase the perfect build.",
    description:
      "Open chests to discover gear upgrades, different builds, stat boosts, and rare legendary items.",
  },
  {
    title: "Ascend",
    tagline: "Rise stronger every run.",
    description:
      "Reset your run to earn permanent upgrades that multiply your power each time.",
  },
  {
    title: "Quests",
    tagline: "Always something to achieve.",
    description:
      "Complete daily and long-term quests to earn extra rewards and push your progression.",
  },
];


export default function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((f) => (
        <div key={f.title} className="feature-item">
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-description">{f.description}</p>
        </div>
      ))}
    </div>
  );
}