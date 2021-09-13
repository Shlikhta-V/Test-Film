import React, { useState, useEffect , useCallback, useMemo} from 'react';

import "./style.scss"
import SearchInput from './../../SearchInput';
import InputYear from '../../InputYear';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../../store/moviesReducer';
import debounce from 'lodash.debounce';
import MovieCard from '../../MovieCart';
import Pagination from '../../Pagination';
import { useHistory } from 'react-router';



const Films = () => {
	const [year, setYearValue ]=useState("");
	const [searchValue, setSearchValue] = useState('');
	const movies = useSelector(state=>state.moviesReducer);
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();
	const [favourites, setFavourites]=useState([]);
	const history=useHistory();

	const fetchFilms=()=>{
		dispatch(fetchMovies(searchValue,year))
	}

	let PageSize = 6;
	
	const delayedQuery = useCallback(debounce(fetchFilms, 500), [searchValue, year]);

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

	function goToFavorite(){
		history.push("/favorite");
	}

	useEffect(() => {	
		delayedQuery();
		return delayedQuery.cancel;
	}, [searchValue, year]);

	const currentMoviesData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return movies.slice(firstPageIndex, lastPageIndex);
	  }, [currentPage, searchValue, year, fetchFilms]);

	 
return (
	<div className="movie-wrapper">
		<div className='container-movies'>
			<div className=" input-containet">
				<button onClick={()=>goToFavorite()}>Favorite</button>
				<SearchInput setSearchValue ={setSearchValue} value={searchValue}/>
				<InputYear setSearchValueYear={setYearValue} value={year}/>
			</div>
			</div>
  <div className="movie-list">
	<h2>Movies</h2>
	<div className="movie-container">
	{currentMoviesData.map((movie, index) => (
		  <MovieCard key={movie.imdbID} data={movie} addFavorite={favourites.includes(movie)?removeFavouriteMovie:addFavouriteMovie} title={favourites.includes(movie)?"Delete":"Add to Favorite"}/>
		))}
	</div>
  </div>
  <div className="pagination">
  <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={movies.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
  </div>
</div>
);
};

export default Films;