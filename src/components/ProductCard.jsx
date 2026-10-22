import { Flex } from "faizen-react-components";
import ProductBadge from "./ProductBadge";
import ProductActions from "./ProductActions";

const ProductCard = ({ img, name, price, color, badge = true }) => {
  return (
    <>
      <div className="group relative overflow-hidden">
        <img src={img} alt={name} />
        {badge && (
          <ProductBadge label="New" className="absolute top-5 left-5" />
        )}
        <ProductActions />
      </div>
      <div className="pt-4.5">
        <Flex className="justify-between">
          <p className={`text-ink text-xl font-bold`}>{name}</p>
          <p className={`text-muted text-base`}>{price}</p>
        </Flex>
        <p className="text-muted pt-3.75 text-base">{color}</p>
      </div>
    </>
  );
};

export default ProductCard;
