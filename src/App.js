import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="bg-[#1C0C5B]">
        <NavBar />
        <Header />
        <About />
        <Services />
        <Projects />
        <Offer />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
