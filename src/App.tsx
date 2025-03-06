import "./App.css";
import Feature from "./components/common/feature/Feature";
import { HeroCarousel } from "./components/common/HeroCarousel";
import NavigationHeader from "./components/common/NavigationHeader";
import TopbarHeader from "./components/common/TopbarHeader";
import Category from "./components/common/category/Category";
import FoodStore from "./components/common/FoodStore";

function App() {
  return (
    <section className="main-section flex flex-col items-center min-h-svh">
      <TopbarHeader />
      <NavigationHeader />
      <HeroCarousel />
      <Feature />
      <Category/>
      <FoodStore/>
    </section>
  );
}

export default App;
