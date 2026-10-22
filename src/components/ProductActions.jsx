import { FaArrowsRotate, FaCartShopping, FaHeart } from "react-icons/fa6";

/**
 * A text button with an icon beside it, used in the product action panel.
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon element, e.g. <FaHeart />
 * @param {React.ReactNode} props.children - Button label
 * @param {string} [props.className] - Extra classes to add
 */
const ProductActionButton = ({ icon, children, className = "" }) => {
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center gap-x-4 ${className}`}
    >
      <span className="text-muted hover:text-ink duration-300 ease-in-out hover:font-bold">
        {children}
      </span>
      {icon}
    </button>
  );
};

/**
 * Panel of product actions that slides up from below its parent on hover.
 * The parent must have the classes `group relative overflow-hidden`.
 * @param {Object} props
 * @param {string} [props.className] - Extra classes to add
 */
const ProductActions = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-full left-0 flex h-auto w-full flex-col items-end gap-y-5 bg-white pt-2 pr-7.5 text-base transition-transform duration-300 ease-in-out group-focus-within:-translate-y-full group-hover:-translate-y-full ${className}`}
    >
      <ProductActionButton icon={<FaHeart />}>
        Add to Wish List
      </ProductActionButton>
      <ProductActionButton icon={<FaArrowsRotate />}>
        Compare
      </ProductActionButton>
      <ProductActionButton icon={<FaCartShopping />}>
        Add to Cart
      </ProductActionButton>
    </div>
  );
};

export default ProductActions;
