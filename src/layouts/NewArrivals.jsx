import { useRef } from "react";
import SlickSlider from "react-slick";

const Slider = SlickSlider.default ?? SlickSlider;
import "slick-carousel/slick/slick.css";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import CarouselBtn from "../components/CarouselBtn";
import { products } from "../data/products";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
};

const NewArrivals = () => {
  const sliderRef = useRef(null);

  return (
    <section className="py-32">
      <Container>
        <h2>New Arrivals</h2>
        <div className="group/carousel relative">
          <Slider ref={sliderRef} {...settings} className="-mx-1.5">
            {products.map((product) => (
              <div key={product.id} className="px-1.5">
                <ProductCard
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  color={product.color}
                />
              </div>
            ))}
          </Slider>

          <CarouselBtn
            type="previous"
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/3 -left-20 z-10 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-focus-within/carousel:opacity-100 group-hover/carousel:opacity-100"
          />
          <CarouselBtn
            type="next"
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/3 -right-20 z-10 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-focus-within/carousel:opacity-100 group-hover/carousel:opacity-100"
          />
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
