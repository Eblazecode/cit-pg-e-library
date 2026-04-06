import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Categories from './pages/Categories'
import Programs from './pages/Programs'
import PGD from './pages/PGD'
import MSC from './pages/MSC'
import PhD from './pages/PhD'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/pgd" element={<PGD />} />
            <Route path="/msc" element={<MSC />} />
            <Route path="/phd" element={<PhD />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
