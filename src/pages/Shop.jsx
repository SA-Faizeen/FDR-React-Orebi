import { Flex } from "faizen-react-components";
import Container from "../components/Container";
import FilterGroup from "../components/FilterGroup";
import ShopToolbar from "../components/ShopToolbar";
import ShopPagination from "../components/ShopPagination";
import ProductCard from "../components/ProductCard";
import pestleAndMortar from "../assets/pestle_and_mortar.png";
import headphones from "../assets/headphones.png";
import table from "../assets/table.png";
import hat from "../assets/hat.png";
import backpack from "../assets/backpack.png";
import sunglasses from "../assets/sunglasses.png";
import basket from "../assets/basket.png";
import wallClock from "../assets/wall_clock.png";
import clock from "../assets/clock.png";

const filterGroups = [
  {
    title: "Shop by Category",
    items: [
      { label: "Category 1" },
      { label: "Category 2" },
      { label: "Category 3" },
      { label: "Category 4" },
      { label: "Category 5" },
    ],
  },
  {
    title: "Shop by Color",
    items: [
      { label: "Color 1", color: "#000" },
      { label: "Color 2", color: "#FF8686" },
      { label: "Color 3", color: "#7ED321" },
      { label: "Color 4", color: "#B6B6B6" },
      { label: "Color 5", color: "#15CBA5" },
    ],
  },
  {
    title: "Shop by Brand",
    items: [
      { label: "Brand 1" },
      { label: "Brand 2" },
      { label: "Brand 3" },
      { label: "Brand 4" },
      { label: "Brand 5" },
    ],
  },
  {
    title: "Shop by Price",
    items: [
      { label: "$0.00 - $9.99" },
      { label: "$10.00 - $19.99" },
      { label: "$20.00 - $29.99" },
      { label: "$30.00 - $39.99" },
      { label: "$40.00 - $69.99" },
    ],
  },
];

const products = [
  {
    name: "Basic Crew Neck Tee",
    image: pestleAndMortar,
    price: "$44.00",
    badge: true,
    badgeText: "New",
  },
  {
    name: "Basic Crew Neck Tee",
    image: headphones,
    price: "$44.00",
    badge: true,
    badgeText: "-10%",
  },
  {
    name: "Basic Crew Neck Tee",
    image: table,
    price: "$44.00",
    badge: false,
  },
  {
    name: "Basic Crew Neck Tee",
    image: hat,
    price: "$44.00",
    badge: false,
  },
  {
    name: "Basic Crew Neck Tee",
    image: wallClock,
    price: "$44.00",
    badge: true,
    badgeText: "New",
  },
  {
    name: "Basic Crew Neck Tee",
    image: backpack,
    price: "$44.00",
    badge: true,
    badgeText: "-10%",
  },
  {
    name: "Basic Crew Neck Tee",
    image: sunglasses,
    price: "$44.00",
    badge: false,
  },
  {
    name: "Basic Crew Neck Tee",
    image: table,
    price: "$44.00",
    badge: true,
    badgeText: "-15%",
  },
  {
    name: "Basic Crew Neck Tee",
    image: hat,
    price: "$44.00",
    badge: true,
    badgeText: "-10%",
  },
  {
    name: "Basic Crew Neck Tee",
    image: basket,
    price: "$44.00",
    badge: false,
  },
  {
    name: "Basic Crew Neck Tee",
    image: clock,
    price: "$44.00",
    badge: false,
  },
  {
    name: "Basic Crew Neck Tee",
    image: sunglasses,
    price: "$44.00",
    badge: false,
  },
];

const Shop = () => {
  return (
    <section className="pt-35 pb-9.75">
      <Container>
        <h1 className="text-ink text-[40px] font-bold">Products</h1>
        <h2 className="text-muted pb-20 text-xs font-normal">
          Home &gt; Products
        </h2>
        <Flex className="items-start gap-x-10">
          <div className="flex w-[20%] flex-col gap-13.25">
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.title}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>

          <div className="w-[80%]">
            <ShopToolbar />
            <div className="grid grid-cols-3 gap-x-10 gap-y-12.5">
              {products.map((p, index) => (
                <ProductCard
                  key={index}
                  name={p.name}
                  price={p.price}
                  img={p.image}
                  badge={p.badge}
                  badgeText={p.badgeText}
                />
              ))}
            </div>
            <ShopPagination />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;