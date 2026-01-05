import About from './pages/About.jsx'
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App(){
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}