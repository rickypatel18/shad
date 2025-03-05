import "./App.css";
import {HeroCarousel } from "./components/common/HeroCarousel";
import NavigationHeader from "./components/common/NavigationHeader";

import TopbarHeader from "./components/common/TopbarHeader";

function App() {
  return (
    <section className="main-section flex flex-col items-center min-h-svh">
      <TopbarHeader />
      <NavigationHeader />
      <HeroCarousel />
    </section>
  );
}

export default App;
