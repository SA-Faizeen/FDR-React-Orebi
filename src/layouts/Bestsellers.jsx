import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { Flex } from "faizen-react-components";
import vase from "../assets/vase.png";
import bag from "../assets/bag.png";
import pestleAndMortar from "../assets/pestle_and_mortar.png";
import backpack from "../assets/backpack.png";

const Bestsellers = () => {
  return (
    <section className={`pb-32`}>
      <Container>
        <h2>Best Sellers</h2>
        <Flex className="gap-x-3">
          <div className="w-1/4">
            <ProductCard
              img={vase}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={bag}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={pestleAndMortar}
              name="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              img={backpack}
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

export default Bestsellers;
