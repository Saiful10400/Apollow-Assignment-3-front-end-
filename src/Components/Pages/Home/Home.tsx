import Footer from "../../Layouts/Footer/Footer";
import Hero from "../../Layouts/Hero/Hero";
import Advertisement from "../../Layouts/ServiceAdvertisement/Advertisement";
import UserReview from "../../Layouts/UserReview/UserReview";

const Home = () => {
  return (
    <>
      <Hero />
      <Advertisement/>
      <UserReview/>
      <Footer/>
    </>
  );
};

export default Home;
