import "./App.css";
import Topbar from './layouts/Topbar/Topbar';
import About from "./pages/Sections/About/About";
import Hero from './pages/Sections/Hero/Hero';
import Specials from "./pages/Sections/Specials/Specials";
import Testimonials from "./pages/Sections/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <div className="App"></div>;
    </div>
  );
}

export default App;
