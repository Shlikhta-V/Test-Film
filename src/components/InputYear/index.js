import React from 'react';
import "./style.scss"
const InputYear = ({value,setSearchValueYear }) => {
    const year= new Date().getFullYear(); 

	return (
		<div className="range-slider" >
			<div className="value">{value}</div>
			<input
				className="rs-range"
				value={value}
				onChange={(event) => setSearchValueYear(event.target.value)}
				type="range"
                min="1930" max={year} step="1"
			></input>
		</div>
	);
};

export default InputYear;