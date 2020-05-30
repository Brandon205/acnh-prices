import React, { useState } from 'react';
import allPrices from './assets/allAnimals.json';

export default function YourList(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let removeFavorite = (name) => {
        let ls = localStorage.getItem('animals').split(',');
        ls.splice(ls.indexOf(name), 1);
        localStorage.setItem('animals', ls);
    }

    let content;
    let displayArr = [];
    if (localStorage.getItem('animals') === null) { // If there are favorited animals then it should loop through them
        content = (<><h1>You haven't added any animals to your list!</h1><p>To do that all you need to do is hit the + sign on the animals info panel.</p></>)
    } else { // For each animal in LS it should check to see if thats an animal in the JSON file, if so add all that animals info to the displayArr to be displayed later
        let ls = localStorage.getItem('animals').split(',');
        ls.forEach(animal => {
            allPrices.some(item => {
                if (item.name === animal) {
                    displayArr.push(item);
                    return true;
                }
                return false;
            });
        })
    };
    
    let mappedAnimals = '';
    if (displayArr.length > 0) {
        mappedAnimals = displayArr.map( (animal, id) => 
        <div className="animal" key={id} onClick={() => expand(animal)}>
            <>
                <p className="animal-name">{animal.name}</p>
            </>
            <hr className="modal-hr" />
            <>
                <p className="prices">{animal.location}</p>
                <p className="prices">{formatter.format(animal.price)}<img className="bells-img" src={process.env.PUBLIC_URL + "/images/BellIcon.png"} alt="bell icon" /></p>
            </>
        </div> )
    }

    let expand = (animal) => {
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + animal.name + '.png'} alt={animal[0]}/>
                    <h1>{animal.name}</h1>
                    <button className="favorite" onClick={() => removeFavorite(animal.name)}>- Remove from Your List</button>
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
            {content}
            {mappedAnimals}
            {modal}
        </div>
    )
}