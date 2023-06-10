import "./App.css";
import Topbar from './layouts/Topbar/Topbar';
import Hero from './pages/Sections/Hero/Hero';
import Specials from "./pages/Sections/Specials/Specials";

function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <Specials />
      <div className="App"></div>;
    </div>
  );
}

export default App;
