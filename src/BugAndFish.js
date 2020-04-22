import React, { useState } from 'react';

export default function BugAndFish(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let mappedAnimals = props.all.map( (animal, id) => <div className="animal" key={id} onClick={() => expand(animal)}>{animal.name} <p className="prices">{formatter.format(animal.price)}<img className="bells-img" src={process.env.PUBLIC_URL + "/images/BellIcon.png"} alt="bell icon" /></p></div> );

    let expand = (animal) => {
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + animal.name + '.png'} alt={animal[0]}/>
                    <h1>{animal.name}</h1>
                    <hr className="modal-hr" />
                    <h3>{animal.location}</h3>
                    <h3>Sells for {formatter.format(animal.price)} bells</h3>
                    <h3>{animal.time}</h3>
                    <h3>{animal.months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }

    return (
        <div className="price-list">
            {mappedAnimals}
            {modal}
        </div>
    )
}
