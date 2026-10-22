import Ads from "../layouts/Ads";
import Ads_2 from "../layouts/Ads_2";
import Bestsellers from "../layouts/Bestsellers";
import Hero from "../layouts/Hero";
import Information from "../layouts/Information";
import NewArrivals from "../layouts/NewArrivals";
import Offers from "../layouts/Offers";

const Home = () => {
  return (
    <main>
      <Hero />
      <Information />
      <Ads />
      <NewArrivals />
      <Bestsellers />
      <Ads_2 />
      <Offers />
    </main>
  );
};

export default Home;
