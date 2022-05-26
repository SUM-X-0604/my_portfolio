import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import Projects from "./components/Projects";

import Loader from "./components/Loader";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      {
        loading ?
          <div className="flex justify-center items-center top-1/2">
            <Loader />
          </div>
          :
          <div className="bg-[#1C0C5B] ">
            <Header />
            <NavBar />
            <About />
            {/* <Services /> */}
            <Projects />
            <Offer />
            <Contact />
            <Footer />
          </div>
      }
    </>
  );
}

export default App;
