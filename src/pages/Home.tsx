import FeatureCard from "../components/FeatureCard";
import StoreButton from "../components/StoreButton";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Idle Progression",
    description: "Tjen guld videre, selv når spillet er lukket.",
  },
  {
    id: 2,
    title: "Spell Combos",
    description: "Kombinér spells for massive damage multipliers.",
  },
  {
    id: 3,
    title: "Gear & Loot",
    description: "Åbn loot chests og opgradér legendarisk gear.",
  },
  {
    id: 4,
    title: "Reincarnation",
    description: "Reset for souls og permanente buffs hver run.",
  },
  {
    id: 5,
    title: "Buff System",
    description: "Aktivér time-limited buffs for vanvittigt tempo.",
  },
  {
    id: 6,
    title: "Leaderboard",
    description: "Konkurrér om højeste stage mod andre spillere.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-phone-wrapper">
          <div className="phone-mockup landscape">
            <div className="phone-screen gradient-1">
              <div className="phone-content">
                <div className="phone-title">Idle Wizard</div>
                <div className="phone-subtitle">Magic Ascension</div>
                <div className="phone-progress">
                  <div className="phone-progress-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-kicker">VestezenGames</p>
          <h1 className="hero-title">The Ultimate Idle Magic Game</h1>
          <p className="hero-description">
            Summon minions, kast absurde spells og se tallene eksplodere, mens
            du klatrer gennem endeløse bølger af fjender og boss fights.
          </p>

          <div className="hero-buttons">
            <StoreButton
              variant="android"
              smallText="Get it on"
              bigText="Google Play"
              // onClick={() => window.open("https://play.google.com/...", "_blank")}
            />
            <StoreButton
              variant="apple"
              smallText="Download on the"
              bigText="App Store"
              // onClick={() => window.open("https://apps.apple.com/...", "_blank")}
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="features-left">
          <h2 className="features-title">Game Features</h2>
          <p className="features-subtitle">
            Seks nøglefeatures, der gør spillet vanedannende (på den gode måde).
          </p>

          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="features-phone-wrapper">
          <div className="phone-mockup landscape">
            <div className="phone-screen gradient-2">
              <div className="phone-content center">
                <div className="phone-record" />
                <div className="phone-song-title">Arcane Beats</div>
                <div className="phone-controls">
                  <span>⏮</span>
                  <span>▶</span>
                  <span>⏭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
