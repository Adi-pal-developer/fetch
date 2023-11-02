import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/Productdetail';
import Footer from './components/Footer';
function App() {
  return <>

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />


        </Routes>
      <Footer />

      </div>
    </Router>

  </>
}
export default App;