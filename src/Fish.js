import React from 'react';

export default function Fish(props) {
    let mappedFish = props.fish.map( (fish, id) => <div className="animal" key={id}>{fish[0]} <p className="prices">{fish[1].price}</p></div> );

    return (
        <div className="price-list">
            <h1>ACNH Fish:</h1>
            {mappedFish}
        </div>
    )
}
