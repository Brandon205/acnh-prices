import React from 'react';
import Display from './Display';
import allPrices from './assets/allAnimals.json';

export default function YourList() {

    let content = '';
    let displayArr = [];
    if (localStorage.getItem('animals') === null || localStorage.getItem('animals').length === 0) { // If there are favorited animals then it should loop through them
        content = (<div className="no-animals"><h1>You haven't added any animals to your list!</h1><h3>To do that all you need to do is hit the + sign on the animals info panel.</h3></div>)
    } else { // For each animal in LS it should check to see if thats an animal in the JSON file, if so add all that animals info to the display array to be displayed later
        let ls = localStorage.getItem('animals').split(',');
        ls.forEach(animal => {
            allPrices.some(item => {
                if (item.name === animal) {
                    displayArr.push(item)
                    return true;
                }
                return false;
            });
        })
    };

    return (
        <div>
            {content}
            <Display list={displayArr} yours={true} />
        </div>
    )
}