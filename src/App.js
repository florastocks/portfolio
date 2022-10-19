import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './components/Home';
import PageNavbar from './components/PageNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {

  return (
    <main>
      <div className='site-wrapper'>
        <BrowserRouter>
          <PageNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
