import { lazy, Suspense } from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Glossary = lazy(() => import("./pages/Glossary"));

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Hero /> */}
      <Suspense fallback={<h1 className="flex justify-center items-center text-xl font-semibold h-[80vh]">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
