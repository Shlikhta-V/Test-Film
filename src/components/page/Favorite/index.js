import React, { useState, useEffect } from 'react';
import "./style.scss"
import MovieCard from '../../MovieCart';
import { useHistory } from 'react-router';


const Favorite = () => {
	const [favourites, setFavourites] = useState([]);
	const history=useHistory();
	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('favourites')
		);
		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		 setFavourites(newFavouriteList);
		 localStorage.setItem('favourites', JSON.stringify(newFavouriteList));
	};
	const goBack=()=>{
		history.goBack();
	}


	return (
		<div className="movie-wrapper">
			<div className=" input-containet">
				<button onClick={()=>goBack()}>All Movies</button>
			</div>
  			<div className="movie-list">
			<h2>Favorite Movies</h2>
			<div className="movie-container">
			{favourites.map((movie, index) => (
		  		<MovieCard key={movie.imdbID} data={movie} addFavorite={removeFavouriteMovie} title="Delete" />
				))}
			</div>
  </div>
</div>
	);
};

export default Favorite;