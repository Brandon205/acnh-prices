import React, { useState } from 'react';
import quicksort from './sorting';
import fishPrices from './assets/fish.json';
import bugPrices from './assets/bugs.json';
import allPrices from './assets/allAnimals.json';
import Fish from './Fish';
import Bugs from './Bugs';
import BugAndFish from './BugAndFish';
import './App.css';

export default function App() {
  const objFishPrices = Object.entries(fishPrices);
  const objBugPrices = Object.entries(bugPrices);
  const objAllPrices = Object.entries(allPrices);
  let currFishPrices;
  let currBugPrices;
  let currAllPrices;

  const [selected, setSelected] = useState('AllPrices');
  const [filterValue, setFilterValue] = useState('');
  const [fishes, setFishes] = useState(objFishPrices); // Fish to show 
  const [bugs, setBugs] = useState(objBugPrices);  // Bugs to show
  const [bugsAndFish, setBugsAndFish] = useState(objAllPrices); // All to show

  // To display the correct content
  let content;
  switch(selected) {
    case 'Fish':
      content = (<Fish fish={fishes} />);
      break;
    case 'Bugs':
      content = (<Bugs bugs={bugs} />);
      break;
    case 'AllPrices':
      content = (<BugAndFish all={bugsAndFish} />);
      break;
    default:
      content = (<BugAndFish all={bugsAndFish} />);
  }

  // For sorting by price rather than name
  let sortByPrice = () => {
    if (selected === 'AllPrices') {
      currAllPrices = quicksort(objAllPrices)
      setBugsAndFish(currAllPrices);
    } else if (selected === 'Fish') {
      currFishPrices = quicksort(objFishPrices)
      setFishes(currFishPrices)
    } else if (selected === 'Bugs') {
      currBugPrices = quicksort(objBugPrices)
      setBugs(currBugPrices)
    }
  }
  // For sorting by name rather than price
  let sortByName = () => {
    if (selected === 'AllPrices') {
      setBugsAndFish(objAllPrices);
    } else if (selected === 'Fish') {
      setFishes(objFishPrices);
    } else if (selected === 'Bugs') {
      setBugs(objBugPrices);
    }
  }

  let filteredList = "";
  let handleFilterChange = (e) => {
    if (selected === "AllPrices") { // Set the props for the thing to render to the filtered list
      filteredList = objAllPrices.filter(animal => animal[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Fish") {
      filteredList = currFishPrices.filter(fish => fish[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setFishes(filteredList);
    } else if (selected === "Bugs") {
      filteredList = currBugPrices.filter(bug => bug[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugs(filteredList);
    }
    setFilterValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Animal Crossing New Horizons Sell Guide</h1>
      <header>
        <div className={selected === "Fish" ? "tabs tab-bkg" : "tabs"} onClick={() => setSelected('Fish')}>Fish</div>
        <div className={selected === "AllPrices" ? "tabs tab-bkg" : "tabs"} onClick={() => setSelected('AllPrices')}>All Prices</div>
        <div className={selected === "Bugs" ? "tabs tab-bkg" : "tabs"} onClick={() => setSelected('Bugs')}>Bugs</div>
      </header>
      <div className="wrap">
        <div className="search">
          <input type="text" value={filterValue} onChange={(e) => handleFilterChange(e)} className="searchTerm" placeholder="Search Here" />
          <button type="submit" className="searchButton">
            >>
          </button>
        </div>
      <div className="list-top"><button className="sort-button" onClick={() => sortByName()}>Name</button> <button className="sort-button" onClick={() => sortByPrice()}>Price</button></div>
      </div>
      {content}
    </div>
  )
}
