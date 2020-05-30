import React, { useState } from 'react';

export default function Display(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let setFavorite = (name) => {
        let oldStorage = localStorage.getItem('animals').split(',')
        oldStorage.push(name)
        localStorage.setItem('animals', oldStorage);
    }

    let mappedAnimals = props.list.map( (animal, id) => 
    <div className="animal" key={id} onClick={() => expand(animal)}>
        <>
            <p className="animal-name">{animal.name}</p>
            {props.all ? <button onClick={() => setFavorite(animal.name)}>+</button> : ''}
        </>
        <hr className="modal-hr" />
        <>
            <p className="prices">{animal.location}</p>
            <p className="prices">{formatter.format(animal.price)}<img className="bells-img" src={process.env.PUBLIC_URL + "/images/BellIcon.png"} alt="bell icon" /></p>
        </>
    </div> );

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