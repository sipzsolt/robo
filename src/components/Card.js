import React from 'react';

const Card = ({id, name, email}) => {
    return (
      <div className="tc br4 grow dib bg-light-blue pa2 ma2 bw2 shadow-5">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="bot" />
        <div>
	        <h2>{name}</h2>
	        <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;
