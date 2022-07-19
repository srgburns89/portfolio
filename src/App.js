import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Particles from "./components/Particles";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer";




function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Contact/>
      <Footer/>


      
    </>
  );
}

export default App;
