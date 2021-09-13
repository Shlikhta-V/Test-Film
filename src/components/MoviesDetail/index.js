import React, { useEffect , useCallback, useState} from "react";
import "./style.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import  { fetchMoviesByID } from "../../store/detailsReducer";
import debounce from 'lodash.debounce';


const MovieDetail = () => {
  const [favourites, setFavourites]=useState([]);
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(state=>state.detaisReducer);
  const fetchFilms=()=>{
    dispatch(fetchMoviesByID(imdbID))
}

useEffect(() => {
  const movieFavourites = JSON.parse(
    localStorage.getItem('favourites')
  );
  if (movieFavourites) {
    setFavourites(movieFavourites);
  }
}, []);

 
const delayedQuery = useCallback(
    debounce(fetchFilms, 500), [imdbID]
);

useEffect(()=>{
	delayedQuery();
	return delayedQuery.cancel;
},[])

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie] ;
setFavourites(newFavouriteList);
localStorage.setItem('favourites', JSON.stringify(newFavouriteList));
};

const removeFavouriteMovie = (movie) => {
const newFavouriteList = favourites.filter(
  (favourite) => favourite.imdbID !== movie.imdbID
);
 setFavourites(newFavouriteList);
 localStorage.setItem('favourites', JSON.stringify(newFavouriteList));
};


const addFavorite=(movie)=>{
  favourites.includes(movie)?
  removeFavouriteMovie(movie)
  :addFavouriteMovie(movie)
}

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
        <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
            <div className="btn-container">
              <button className="myButton" onClick={()=>addFavorite(data)}>
                  {favourites.includes(data)? "delete": "add to favorite"}
                </button>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};

export default MovieDetail;