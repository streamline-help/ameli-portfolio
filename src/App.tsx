import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import JimmysBurgerBar from './pages/JimmysBurgerBar';

function App() {
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