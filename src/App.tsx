import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import JimmysBurgerBar from './pages/JimmysBurgerBar';

function App() {
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const els = [...document.querySelectorAll('.reveal')];
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.14 }
      );
      els.forEach((el) => io.observe(el));
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/jimmys-burger-bar" element={<JimmysBurgerBar />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;