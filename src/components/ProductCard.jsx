import { Flex } from "faizen-react-components";
import ProductBadge from "./ProductBadge";
import ProductActions from "./ProductActions";

const ProductCard = ({ img, name, price, color, badge = true, badgeText="New" }) => {
  return (
    <div className="border border-red-500">
      <div className="group relative overflow-hidden">
        <img src={img} alt={name} />
        {badge && (
          <ProductBadge label={badgeText} className="absolute top-5 left-5" />
        )}
        <ProductActions />
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