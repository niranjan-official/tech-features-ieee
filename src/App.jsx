import Agenda from "./components/Pages/Agenda";
import Schedule from "./components/Pages/Schedule";
import Speakers from "./components/Pages/Speakers";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full text-white font-poppins bg-black">
      <Navbar />
      <Home />
      <Agenda />
      <Schedule />
      <Speakers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
