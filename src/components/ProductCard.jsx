import { Flex } from "faizen-react-components";
import ProductBadge from "./ProductBadge";
import ProductActions from "./ProductActions";

/**
 * ProductCard displays a single product with its image, name, price, color,
 * and an optional badge. Hovering the image reveals {@link ProductActions}.
 *
 * @component
 * @param {Object}  props
 * @param {string|number} [props.id]    - Product ID.
 * @param {string}  props.img          - URL (or import path) of the product image.
 * @param {string}  props.name         - Product name shown as the card title.
 * @param {string|number} props.price  - Price label displayed alongside the name.
 * @param {string}  props.color        - Color / variant description shown below the name.
 * @param {boolean} [props.badge=true] - Whether to render the {@link ProductBadge}.
 * @param {string}  [props.badgeText="New"] - Text displayed inside the badge.
 * @returns {JSX.Element}
 */
const ProductCard = ({ id, img, name, price, color, badge = true, badgeText="New" }) => {
  const productId = id || name;
  return (
    <div>
      <div className="group relative overflow-hidden">
        <img src={img} alt={name} />
        {badge && (
          <ProductBadge label={badgeText} className="absolute top-5 left-5" />
        )}
        <ProductActions product={{ id: productId, img, name, price, color }} />
      </div>
      <div className="pt-4.5">
        <Flex className="items-baseline justify-between gap-x-4">
          <p className="text-ink text-xl font-bold">{name}</p>
          <p className="text-muted shrink-0 text-base">{price}</p>
        </Flex>
        <p className="text-muted pt-3.75 text-base">{color}</p>
      </div>
    </div>
  );
};

export default ProductCard;
