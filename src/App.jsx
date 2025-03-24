import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CreateWebsite from "./pages/CreateWebsite";
import DevelopWebsite from "./pages/DevelopWebsite";
import HiringDeveloper from "./pages/HiringDeveloper";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/create-website" element={<CreateWebsite />} />
        <Route path="/services/develop-website" element={<DevelopWebsite />} />
        <Route path="/services/hiring-developer" element={<HiringDeveloper />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
