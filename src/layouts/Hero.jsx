import { Link } from "react-router-dom";
import BgImage from "../components/BgImage";
import heroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="border-line border-t">
      <Link to="/shop">
        <BgImage className="min-h-[65vh]" src={heroImage} />
      </Link>
    </section>
  );
};

export default Hero;
