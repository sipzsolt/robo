import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pb3'>
			<input 
			id='searchbox' 
			type="search" 
			placeholder="Search Robo names" 
			onChange={searchChange} />
		</div>
		)
}

export default SearchBox;