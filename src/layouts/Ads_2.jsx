import bannerImage from "../assets/banner2.png";
import Container from "../components/Container";

const Ads_2 = () => {
  return (
    <section>
      <Container>
        <div className={`h-92.5 w-full`}>
          <img src={bannerImage} alt="banner2.png" />
        </div>
      </Container>
    </section>
  );
};

export default Ads_2;
