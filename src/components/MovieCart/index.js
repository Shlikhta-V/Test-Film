import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";



const MovieCard =({data, addFavorite, title}) => {
  return (
    <div className="card-item">
      <Link to={`/moviedetail/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="btn-container">
      <button className="myButton" onClick={()=>addFavorite(data)}>
       {title}
    </button>
      </div>
    </div>
    
  );
};

export default MovieCard;