import React from "react";
import "./reviews.css"
import RatingPill from "../ratingpill/ratingPill";
import { Link } from "react-router-dom";

interface props {
    data: any
}


function Reviews(props: props) {

    let count = 0
if(props.data?.length>0){
    return (
        <div className="review-bottom-div">
            {

                props.data?.results.map((author: any) => {

                    count++
                    if (count <= 1) {
                        return (
                            <div key={author.id}> 
                                <div key={author.id} className="review-card" >
                                    <div className="reviewer">
                                        <img className="review-avatar" src={`https://image.tmdb.org/t/p/w500${author.author_details.avatar_path}`}></img>
                                        <div>
                                            <div className="rating-review">   <a className="reviewer-details" href={author.url}>{`A review by ${author.author}`}</a> <span><RatingPill rating={author.author_details.rating} /></span></div>

                                            <div className="review-date">{`Written by ${author.author_details.username} on ${author.updated_at.slice(0, 10)}`}</div>
                                        </div>

                                    </div>
                                    <div className="review-content" id="content">

                                        {author.content.slice(0, 400)};
                                    </div>
                                    </div>
                                <Link className="all-reviews" to={`/movies/:moviename/:movieId/review/${props.data.id}`}>
                                    <div className="all-reviews">Read All Reviews</div>
                                </Link>

                            </div>

                        )
                    }

                })
            }


        </div>
    )
}else{
    return(
        <div>
          {`We don't have any reviews for this movie . Would you like to write one?`} 
        </div>
    )
}
   

}

export default Reviews