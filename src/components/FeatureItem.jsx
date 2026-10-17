/**
 * An icon with a short label beside it.
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon element or text, e.g. <TbTruck /> or "2"
 * @param {string} props.text - Label text
 */
const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-xl font-bold text-ink">{icon}</span>
      <p className="text-base text-muted">{text}</p>
    </div>
  );
};

export default FeatureItem;