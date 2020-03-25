import React, { useState } from 'react';
import fishPrices from './fish.json';
import bugPrices from './bugs.json';
import allPrices from './allAnimals.json';
import Fish from './Fish';
import Bugs from './Bugs';
import BugAndFish from './BugAndFish';
import './App.css';

export default function App() {
  let objFishPrices = Object.entries(fishPrices);
  let objBugPrices = Object.entries(bugPrices);
  let objAllPrices = Object.entries(allPrices);

  const [selected, setSelected] = useState('AllPrices');
  const [filterValue, setFilterValue] = useState('');
  const [fishes, setFishes] = useState(objFishPrices); // Fishes to show 
  const [bugs, setBugs] = useState(objBugPrices);  // Bugs to show
  const [bugsAndFish, setBugsAndFish] = useState(objAllPrices); // All to show


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

  let filteredList = "";
  let handleFilterChange = (e) => {
    if (selected === "AllPrices") { //set the props for the thing to render to the filtered list
      filteredList = objAllPrices.filter(animal => animal[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Fish") {
      filteredList = objFishPrices.filter(fish => fish[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setFishes(filteredList);
    } else if (selected === "Bugs") {
      filteredList = objBugPrices.filter(bug => bug[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
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
      <label htmlFor="search"></label>
      <input name="search" value={filterValue} onChange={(e) => handleFilterChange(e)} placeholder="Search Here" />
      {content}
    </div>
  )
}
