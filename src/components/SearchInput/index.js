
import React from 'react';
import "./style.scss"
const SearchInput = ({value,setSearchValue }) => {
	return (
		<div className="input-container" >
			<input
				className='form__input'
				value={value}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchInput;