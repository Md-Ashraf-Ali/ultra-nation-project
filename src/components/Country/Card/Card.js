import React from 'react';

const Card = (props) => {
    const card = props.card;
    let totalPopulation = 0;
    for (let i = 0; i< card.length; i++) {
      const country = card[i];
       totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h2>this is card: {card.length}</h2>
            <p>population : {totalPopulation}</p>
        </div>
    );
};

export default Card;