import React, { useState } from 'react';

export default function BugAndFish(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id} onClick={() => expand(animal)}>{animal[0]} <p className="prices">{animal[1].price}</p></div> );

    let expand = (animal) => {
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + animal[0] + '.png'} alt={animal[0]}/>
                    <h1>{animal[0]}</h1>
                    <hr />
                    <h3>{animal[1].location}</h3>
                    <h3>Sells for {formatter.format(animal[1].price)} bells</h3>
                    <h3>{animal[1].time}</h3>
                    <h3>{animal[1].months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }

    return (
        <div className="price-list">
            <h1>All ACNH Animals: </h1>
            {mappedAnimals}
            {modal}
        </div>
    )
}
