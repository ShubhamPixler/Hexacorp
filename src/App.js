import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/services';
import Categories from './pages/categories/Categories';
import Testimonial from './pages/testimonial/Testimonial';


function App() {
  return (

    <Router>
      <Header />
      
        <Routes>
          { <Route exact path="/" element={<Home />}></Route> }
          { <Route exact path="/services" element={<Services />}></Route> }
          { <Route exact path="/categories" element={<Categories />}></Route> }
          { <Route exact path="/testimonial" element={<Testimonial />}></Route> }
        </Routes>
      
      <Footer />
    </Router>
    
  );
}

export default App;
