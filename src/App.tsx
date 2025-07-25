import NavBar from "./components/NavBar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[1920px] overflow-hidden">
      <NavBar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
