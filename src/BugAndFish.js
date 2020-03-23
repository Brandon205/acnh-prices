import React from 'react';

export default function BugAndFish(props) {
    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id}>{animal[0]} <p className="prices">{animal[1]}</p></div> );

    return (
        <div className="price-list">
            <h1>Hello from bug and fish</h1>
            {mappedAnimals}
        </div>
    )
}
