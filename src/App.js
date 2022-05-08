import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-slate-700">
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Services />
      </div>
    </>
  );
}

export default App;
