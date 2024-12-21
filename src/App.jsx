
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Give from './component/give/Give';
import ReviewCard from './component/reviewCard/ReviewCard';
import PriceBlock from './component/price_block/Price_Block';
import Application from './component/application/Application';
import News from './component/news/News';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contacts' element={<Give/>} />
          <Route path='/reviews' element={<ReviewCard/>} />
          <Route path='/price' element={<PriceBlock/>} />
          <Route path='/application' element={<Application/>} />
          <Route path='/news' element={<News/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

// git add .  git commit -m "" git push origin main
