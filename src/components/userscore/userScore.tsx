// import './movieCard.css';

interface props{
  movie:any
}
const UserScore= ({movie}:any) => {
  const strokeDashArray= 2*Math.PI*70; // 70 is the radius of circle
  const strokeDashOffset = strokeDashArray * ((100 - movie.vote_average*10) / 100);

  const getColor=(percent:number)=>{
    if(percent >60){
      return "#60e6a8";
    }else if(percent >40){
      return "#bdc12f";
    }else{
      return "#981e4b";
    }
  }
  return (
    <div className="movie-card-container">
      <div className="movie-thumbnail">
        <img
          src={`${process.env.IMAGE_PATH_SM}${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="movie-info">
        <div className="rating-bar-circular">
          <svg
            width="43"
            height="43"
            viewBox="0 0 160 160"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="70"
              cx="80"
              cy="80"
              fill="transparent"
              stroke="#e0e0e0"
              stroke-width="12px"
            ></circle>
            <circle
              r="70"
              cx="80"
              cy="80"
              fill="transparent"
              stroke={getColor(movie.vote_average * 10)}
              stroke-linecap="round"
              stroke-width="12px"
              stroke-dasharray={`${strokeDashArray}px`}
              stroke-dashoffset={`${strokeDashOffset}px`}
            ></circle>
            <text
              x="51px"
              y="114px"
              fill="#fff"
              font-size="52px"
              font-weight="bold"
              style={{ transform: "rotate(90deg) translate(-5px, -175px)" }}
            >
              {Math.floor(movie.vote_average * 10)}
            </text>
            <text
              x="51px"
              y="114px"
              fill="#fff"
              font-size="35px"
              font-weight="bold"
              style={{ transform: "rotate(90deg) translate(50px, -195px)" }}
            >
              %
            </text>
          </svg>
        </div>
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default UserScore