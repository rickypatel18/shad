import Feature from "../components/common/feature/Feature";
import { HeroCarousel } from "../components/common/HeroCarousel";
import Category from "../components/common/category/Category";
import FoodStore from "../components/common/FoodStore";
import CompanyFeature from "../components/common/CompanyFeature";
import Banner from "../components/common/Banner";
import BestSellerProductCard from "../components/common/BestSellerProductCard";
import LatestNews from "../components/common/LatestNews";
import Testimonial from "../components/common/Testimonial";
import Carousal from "../components/common/contact/Carousal";
import Contact from "../components/common/contact/Contact";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Home = () => {
  return (
    <section className="main-section flex flex-col items-center min-h-svh px-[10px] md:p-0">
      <Header/>
      <HeroCarousel />
      <Feature />
      <Category />
      <FoodStore />
      <CompanyFeature />
      <Banner />
      <BestSellerProductCard />
      <LatestNews />
      <Testimonial />
      <Carousal />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
