import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CaseStudy from './pages/CaseStudy';
import BlogListing from './pages/BlogListing';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<BlogListing/>}/>
      <Route path="/blog/how-we-deliver" element={<Blog/>}/>
      <Route path="/case-study/sol-on-park" element={<CaseStudy/>}/>
    </Routes>
  );
}

export default App;
