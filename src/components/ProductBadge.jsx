const ProductBadge = ({ label, className = "" }) => {
  return (
    <div
      className={`bg-ink px-7.5 py-2.5 text-sm font-bold text-white ${className}`}
    >
      {label}
    </div>
  );
};

export default ProductBadge;
