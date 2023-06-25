import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { requestOptions } from "../../../../../module/todayContentModule";
import "./seemore.css"
import no_profile from  "../../../../../assets/images/logos/no-profile-picture-icon.svg"

function SeeMore() {


  let [crew, setCrew] = useState<any>()



  const location = useLocation();

  const { cast }: any = useParams()


  useEffect(() => {
    if (location.pathname.includes("/people")) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
      myHeaders.append("accept", "application/json");

      var requestOptions: requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`https://api.themoviedb.org/3/movie/${cast}/credits?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
        .then(response => response.json())
        .then(result => setCrew(result))
        .catch(error => console.log('error', error));




    }
  }, [])

  console.log(crew)

  return (

    <div className="people">
      <div className="cast-people">
        <h3 className="cast-title">Cast <span className="count">{crew?.cast.length}</span></h3>
        {crew?.cast.map((crewPeople: any) => {
          return (
            <div className="people-div"> <img className="people-profile" src={crewPeople.profile_path?`https://image.tmdb.org/t/p/w500${crewPeople.profile_path}`:`${no_profile}`}></img>
            <div className="people-names">
              <div  className="fig-caption-name">{crewPeople.name}</div>
              <div   className="fig-character-name">{crewPeople.character}</div></div>
            </div>
          )
        })}
      </div>

      <div className="crew">
        <h3 className="crew-title">Crew <span className="count">{crew?.crew.length}</span></h3>
        {crew?.crew.map((crewPeople: any) => {
          return (
            <div className="people-div">
              <img className="people-profile" src={crewPeople.profile_path?`https://image.tmdb.org/t/p/w500${crewPeople.profile_path}`:`${no_profile}`}></img>
              <div className="people-names">
              <div className="fig-caption-name">{crewPeople.name}</div><div className="fig-character-name">{crewPeople.job}</div></div>

            </div>
          )
        })}
      </div>
    </div>


  )
}



export default SeeMore;