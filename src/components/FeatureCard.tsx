// src/components/FeatureCard.tsx
interface FeatureCardProps {
  title: string;
  description: string;
  tagline?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  tagline,
}) => {
  return (
    <div className="feature-item">
      <h3 className="feature-title">{title}</h3>
      {tagline && <p className="feature-tagline">{tagline}</p>}
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
