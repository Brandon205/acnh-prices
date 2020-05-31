import React, { useState, useEffect } from 'react';

export default function Display(props) {
    const [modal, setModal] = useState('');
    const [display, setDisplay] = useState([]);
    var formatter = new Intl.NumberFormat();

    useEffect( () => {
        setDisplay(props.list)
    }, [props.list]);

    let setFavorite = (name) => {
        let currStorage;
        if (localStorage.getItem('animals') === null) {
            currStorage = [];
        } else {
            currStorage = localStorage.getItem('animals').split(',') || [];
        }
        currStorage.push(name)
        localStorage.setItem('animals', currStorage);
    }

    let removeFavorite = (name) => {
        let ls = localStorage.getItem('animals').split(',');
        ls.splice(ls.indexOf(name), 1);
        localStorage.setItem('animals', ls);
        for (let i = 0; i < display.length; i++) {
            if (display[i].name === name) {
                display.splice(i, 1);
            }
        }
    }

    let mappedAnimals = display.map( (animal, id) => 
    <div className="animal" key={id} onClick={() => expand(animal)}>
        <>
            <p className="animal-name">{animal.name}</p>
        </>
        <hr className="modal-hr" />
        <>
            <p className="prices">{animal.location}</p>
            <p className="prices">{formatter.format(animal.price)}<img className="bells-img" src={process.env.PUBLIC_URL + "/images/BellIcon.png"} alt="bell icon" /></p>
        </>
    </div> );

    let expand = (animal) => { // TODO: Make it so that it checks each of these against the names in LS then show add or remove based on that
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + animal.name + '.png'} alt={animal[0]}/>
                    <h1>{animal.name}</h1>
                    {props.all ? <button className="favorite" onClick={() => setFavorite(animal.name)}>+ Add to Your List</button> : ''}
                    {props.yours ? <button className="favorite" onClick={() => { removeFavorite(animal.name) }}>- Remove from Your List</button> : ''}
                    <hr className="modal-hr" />
                    <h3>{animal.location}</h3>
                    <h3>Sells for {formatter.format(animal.price)} bells</h3>
                    <h3>{animal.time ? animal.time : ''}</h3>
                    <h3>{animal.months ? animal.months : ''}</h3>
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