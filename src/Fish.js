import React from 'react';
// import fish from './fish.json';

export default function Fish(props) {
    let mappedFish = props.fish.map( (fish, id) => <div className="fish" key={id}>{fish[0]} <p className="prices">{fish[1]}</p></div> );

    return (
        <div className="fishes">
            <h1>Fish:</h1>
            {mappedFish}
        </div>
    )
}
