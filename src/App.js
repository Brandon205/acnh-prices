import React, { useState } from 'react';
import fishPrices from './fish.json';
import bugPrices from './bugs.json';
import allPrices from './allAnimals.json';
import Fish from './Fish';
import Bugs from './Bugs';
import BugAndFish from './BugAndFish';
import './App.css';

export default function App() {
  const [selected, setSelected] = useState('AllPrices');
  const [filterValue, setFilterValue] = useState('');
  const [fishes, setFishes] = useState(Object.entries(fishPrices)); // Fishes to show 
  const [bugs, setBugs] = useState(Object.entries(bugPrices));  // Bugs to show
  const [bugsAndFish, setBugsAndFish] = useState(Object.entries(allPrices)); // All to show

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
      content = (<BugAndFish all={bugsAndFish} />)
  }

  let filteredList = "";
  let handleFilterChange = (e) => {
    if (selected === "AllPrices") { //set the props for the thing to render to the filtered list
      console.log(bugsAndFish);
      filteredList = bugsAndFish.filter(animal => animal[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      console.log(filteredList);
      setBugsAndFish(filteredList);
    } else if (selected === "Fish") {
      filteredList = fishes.filter(fish => fish[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setFishes(filteredList);
    } else if (selected === "Bugs") {
      filteredList = bugs.filter(bug => bug[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugs(filteredList);
    }
    setFilterValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="tabs" onClick={() => setSelected('Fish')}>Fish</div>
      <div className="tabs" onClick={() => setSelected('AllPrices')}>AllPrices</div>
      <div className="tabs" onClick={() => setSelected('Bugs')}>Bugs</div>
      <input value={filterValue} onChange={(e) => handleFilterChange(e)}/>
      {content}
    </div>
  )
}
