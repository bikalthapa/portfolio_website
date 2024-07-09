import Navbar, { Footer } from "./components/navbar/navbar";
import Home from "./components/tabs/home/home";
import Portfolio from "./components/tabs/portfolio/portfolio";
import ContactForm from "./components/tabs/contact/contact";
import AboutMe from "./components/tabs/aboutMe/aboutMe";
import Blog from "./components/tabs/blogs/blog";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={
            <Home />
          }></Route>

          <Route exact path="/portfolio" element={
            <Portfolio pagination={true} />
          }></Route>

          <Route exact path="/contact" element={
            <ContactForm />
          }></Route>

          <Route exact path="/about" element={
            <AboutMe />
          }></Route>

          <Route exact path="/blogs" element={
            <Blog/>
          }></Route>

        </Routes>
        <br/><br/>
        <Footer />
      </Router>
    </>
  );
}
export default App;