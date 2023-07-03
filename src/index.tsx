import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TrendingContent from './components/trending/trendingcontent/trendingContent';
import Render from './components/moviedetails/movieDetails';
import { MovieDetails } from './network/network';
import { WeeklyContent } from './network/network';
import SeeMore from './components/moviedetails/herosection/credits/seemore/seemore';
import AllReviews from './components/moviedetails/allreviews/allReviews';
import RecoMovieDetails from './components/recomendedmoviecard/recomendedMovieCard';
import SeriesDetails from './components/discover/seriescard/series';
const router=createBrowserRouter(
  [{
    path:"/",
    element:<App/>
  },{
    path:`/movies/:moviename/:movieId`,
    element:<Render/>
  },
{
  path:`/people/:cast`,
  element:<SeeMore/>
},{
  path:`/movies/:moviename/:movieId/review/:id`,
  element:<AllReviews/>
},{
  path:"/movies/:moviename/:movieId/recomendations/:recomendedMovieName/:recomendedMovieId",
  element:<RecoMovieDetails/>
},{
  path:`/series/:seriesname/:seriesId`,
  element:<SeriesDetails/>
}]
   
  
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
