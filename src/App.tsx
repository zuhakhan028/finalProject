import React from 'react';
import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import Discover from './components/discover/discover';
import './App.css';
import Trending from './components/trending/trending';
import Header from './components/header/header';
import { WeeklyContent } from './network/network';
import { TodayContent } from './network/network';
import Footer from './components/footer/footer';
import trendingBackGroundImage from "./assets/images/logos/trendingbackground.svg"
import LatestTrailers from './components/latesttrailers/latestTrailers';



function App() {
const trending=WeeklyContent();
const todayContent=TodayContent()



  return (
    <div className="App" >
      <div className='bodyWrapper'>
        <Header />
        <div className='discover'  >
        <Discover data={trending} />
        <Trending weeklydata={trending} todayContent={todayContent}/>
        {/* <LatestTrailers data={""}/> */}
        </div>
      
       <Footer/>
      </div>

    </div>
  );
}

export default App;
