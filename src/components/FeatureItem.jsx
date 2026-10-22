/**
 * An icon with a short label beside it.
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon element or text, e.g. <TbTruck /> or "2"
 * @param {string} props.text - Label text
 */
const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-ink text-xl font-bold">{icon}</span>
      <p className="text-muted text-base">{text}</p>
    </div>
  );
};

export default FeatureItem;
