import React, { useState } from 'react';
import quicksort from './sorting';
import fishPrices from './assets/fish.json';
import bugPrices from './assets/bugs.json';
import allPrices from './assets/allAnimals.json';
import Fish from './Fish';
import Bugs from './Bugs';
import BugAndFish from './BugAndFish';
import './App.css';

const objFishPrices = [...fishPrices];
const objBugPrices = [...bugPrices];
const objAllPrices = [...allPrices];
export default function App() {
  let currFishPrices = fishPrices;
  let currBugPrices = bugPrices;
  let currAllPrices = allPrices;

  const [selected, setSelected] = useState('AllPrices');
  const [filterValue, setFilterValue] = useState('');
  const [fishes, setFishes] = useState(fishPrices); // Fish to show 
  const [bugs, setBugs] = useState(objBugPrices);  // Bugs to show
  const [bugsAndFish, setBugsAndFish] = useState(objAllPrices); // All to show

  // For sorting by price rather than name
  let sortByPrice = () => {
    if (selected === 'AllPrices') {
      currAllPrices = quicksort(allPrices)
      setBugsAndFish(currAllPrices);
    } else if (selected === 'Fish') {
      currFishPrices = quicksort(fishPrices)
      setFishes(currFishPrices)
    } else if (selected === 'Bugs') {
      currBugPrices = quicksort(bugPrices)
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
      filteredList = currAllPrices.filter(animal => animal.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Fish") {
      filteredList = currFishPrices.filter(fish => fish.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setFishes(filteredList);
    } else if (selected === "Bugs") {
      filteredList = currBugPrices.filter(bug => bug.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugs(filteredList);
    } 
    setFilterValue(e.target.value);
  }

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

  return (
    <div className="App">
      <h1 className="title">Animal Crossing New Horizons Prices</h1>
      <hr className="header-hr" />
      <header>
        <div className={selected === "Fish" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('Fish'); setFilterValue(''); }}>Fish</div>
        <div className={selected === "AllPrices" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('AllPrices'); setFilterValue(''); }}>All Prices</div>
        <div className={selected === "Bugs" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('Bugs'); setFilterValue(''); }}>Bugs</div>
      </header>
      <div className="wrap">
        <div className="search">
          <input type="text" value={filterValue} onChange={(e) => handleFilterChange(e)} className="searchTerm" placeholder="Search Here" />
          <button type="submit" className="searchButton" onClick={(e) => { setFilterValue(''); handleFilterChange(e); } }>
            X
          </button>
        </div>
      <div className="list-top"><button className="sort-button" onClick={() => { sortByName(); setFilterValue('') }}>Name</button> <button className="sort-button" onClick={() => { sortByPrice(); setFilterValue('') }}>Price</button></div>
      </div>
      {content}
      <hr className="header-hr" />
      <footer>
        <div>
          <div className="icons"><a href="https://twitter.com/brandonblack02" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a><a href="https://www.linkedin.com/in/brandonblack02/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a><a href="https://github.com/Brandon205" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square social-icons"></i></a></div>  
        </div>
        <p>ACNH PRICES ©2020</p>
        <p>Created By: <a href="https://github.com/Brandon205" rel="noopener noreferrer" target="_blank">brandon205</a></p>
      </footer>
    </div>
  )
}
