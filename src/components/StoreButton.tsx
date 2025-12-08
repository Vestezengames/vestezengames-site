type StoreVariant = "android" | "apple";

interface StoreButtonProps {
  variant: StoreVariant;
  smallText: string;
  bigText: string;
  onClick?: () => void;
}

const StoreButton: React.FC<StoreButtonProps> = ({
  variant,
  smallText,
  bigText,
  onClick,
}) => {
  const isAndroid = variant === "android";

  return (
    <button
      className={`store-btn ${isAndroid ? "android" : "apple"}`}
      type="button"
      onClick={onClick}
    >
      <span className="store-icon">{isAndroid ? "🤖" : ""}</span>
      <span className="store-text">
        <span className="store-small">{smallText}</span>
        <span className="store-big">{bigText}</span>
      </span>
    </button>
  );
};

export default StoreButton;
