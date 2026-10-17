import Container from "../components/Container.jsx";
import { Flex } from "faizen-react-components";
import AdOne from "../assets/Ad_1.jpg";
import AdTwo from "../assets/Ad_2.png";
import AdThree from "../assets/Ad_3.jpg";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <section className="pt-35">
      <Container>
        <Flex className="justify-between">
          <div className="w-[48%] h-187.5">
            <Link to="/shop" className="size-full">
              <img className="size-full" src={AdOne} alt="Ad one" />
            </Link>
          </div>
          <div className="w-[48%] h-187.5 flex flex-col justify-between">
            <Link to="/shop" className="w-full h-[47%]">
              <img className="size-full" src={AdTwo} alt="Ad two" />
            </Link>
            <Link to="/shop" className="w-full h-[47%]">
              <img className="size-full" src={AdThree} alt="Ad three" />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Ads;
