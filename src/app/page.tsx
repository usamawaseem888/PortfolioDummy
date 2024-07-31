import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Projects } from "./component/Projects";
import { BackgroundBeamsDemo } from "./component/Background-beams";



export default function Home() {
  return (
   <div >
    <Navbar/>
    <BackgroundBeamsDemo/>
    <div id="about"><About/></div>
    <div id="projects"><Projects/></div>
    <div id="contact"><Contact/></div>
    <Footer/>
   </div>
  );
}
