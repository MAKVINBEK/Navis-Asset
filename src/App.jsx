
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
import Detail from './component/news/News';
import BlockNews from './component/block_news/BlockNews';
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contacts' element={<Give/>} />
          <Route path='/reviews' element={<ReviewCard/>} />
          <Route path='/price' element={<PriceBlock/>} />
          <Route path='/application' element={<Application/>} />
          <Route path='/news/:id' element={<Detail/>} />
          <Route path='/all' element={<BlockNews/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App


