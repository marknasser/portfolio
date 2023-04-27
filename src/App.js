import { BrowserRouter, HashRouter } from "react-router-dom";
import {
  Works,
  About,
  Contact,
  Experience,
  Feedbacks,
  Home,
  Navbar,
} from "./components";

function App() {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Home setSelectedPage={""} />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
