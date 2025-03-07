import "./App.css";
import Feature from "./components/common/feature/Feature";
import { HeroCarousel } from "./components/common/HeroCarousel";
import NavigationHeader from "./components/common/NavigationHeader";
import TopbarHeader from "./components/common/TopbarHeader";
import Category from "./components/common/category/Category";
import FoodStore from "./components/common/FoodStore";
import CompanyFeature from "./components/common/CompanyFeature";
import Banner from "./components/common/Banner";
import BestSellerProductCard from "./components/common/BestSellerProductCard";
import LatestNews from "./components/common/LatestNews";

function App() {
  return (
    <section className="main-section flex flex-col items-center min-h-svh">
      <TopbarHeader />
      <NavigationHeader />
      <HeroCarousel />
      <Feature />
      <Category />
      <FoodStore />
      <CompanyFeature />
      <Banner />
      <BestSellerProductCard />
      <LatestNews/>
    </section>
  );
}

export default App;
