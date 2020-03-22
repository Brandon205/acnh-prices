import React from 'react';
import fish from './fish.json';

export default function Fish() {
    let fishEntries = Object.entries(fish);
    let mappedFish = fishEntries.map( (fish, id) => 
        <div className="fish" key={id}>{fish[0]} <p>{fish[1]}</p></div>
    );
    return (
        <div className="fishes">
            <h1>Fish:</h1>
            {mappedFish}
        </div>
    )
}
