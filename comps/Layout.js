import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
        <Navbar />
        <Gallery />
        { children }
        <About />
        <Contact />
        <Footer />
        </div>
     );
}
 
export default Layout;