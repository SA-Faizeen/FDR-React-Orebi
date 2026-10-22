import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import { Flex } from "faizen-react-components";
import hat from "../assets/hat.png";
import table from "../assets/table.png";
import headphones from "../assets/headphones.png";
import sunglasses from "../assets/sunglasses.png";

const Offers = () => {
  return (
    <section className="pb-35">
      <Container>
        <h2>Special Offers</h2>
        <Flex className="gap-x-3">
          <div className="w-1/4">
            <ProductCard
              img={hat}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={table}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={headphones}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={sunglasses}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Offers;
