import React, { useState } from 'react';
import miscPrices from './assets/misc.json';
import allPrices from './assets/allAnimals.json';
import YourList from './YourList';
import Display from './Display';
import './App.css';

const objMiscPrices = [...miscPrices];
const objAllPrices = [...allPrices];
export default function App() {
  let currAllPrices = allPrices;
  let currMiscPrices = miscPrices;

  const [selected, setSelected] = useState('AllPrices');
  const [filterValue, setFilterValue] = useState('');
  const [filterby, setFilterby] = useState('name');
  const [miscs, setMiscs] = useState(objMiscPrices);
  const [bugsAndFish, setBugsAndFish] = useState(objAllPrices); // Animals to show

  let filteredList = "";
  let regexNorth = /(.+(,)|(Year-Round))/g;
  let regexSouth = /((\s).+|(Year-Round))/g;
  let handleFilterChange = (e) => { // Handles the filtering of all of the items 
    if (selected === "AllPrices" && filterby === 'name') { 
      filteredList = currAllPrices.filter(animal => animal.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Misc" && filterby === 'name') {
      filteredList = currMiscPrices.filter(item => item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setMiscs(filteredList);
    }
    if (selected === "AllPrices" && filterby === 'price') { 
      filteredList = currAllPrices.filter(animal => animal.price.toString().startsWith(e.target.value));
      setBugsAndFish(filteredList);
    } else if (selected === "Misc" && filterby === 'price') {
      filteredList = currMiscPrices.filter(item => item.price.toString().startsWith(e.target.value));
      setMiscs(filteredList);
    } 
    if (selected === "AllPrices" && filterby === 'location') { 
      filteredList = currAllPrices.filter(animal => animal.location.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } else if (selected === "Misc" && filterby === 'location') {
      filteredList = currMiscPrices.filter(item => item.location.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setMiscs(filteredList);
    } 
    if (selected === "AllPrices" && filterby === 'northDate') { 
      filteredList = currAllPrices.filter(animal => animal.months.match(regexNorth)[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } 
    if (selected === "AllPrices" && filterby === 'southDate') { 
      filteredList = currAllPrices.filter(animal => animal.months.match(regexSouth)[0].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setBugsAndFish(filteredList);
    } 
    setFilterValue(e.target.value);
  }

    // To display the correct content
    let content;
    switch(selected) {
      case 'AllPrices':
        content = (<Display list={bugsAndFish} all={true} />);
        break;
      case 'YourList':
        content = (<YourList />)
        break;
      case 'Misc':
        content = (<Display list={miscs} />);
        break;
      default:
        content = (<Display list={bugsAndFish} />);
    }

  return (
    <div className="App">
      <h1 className="title">Animal Crossing New Horizons Prices</h1>
      <hr className="header-hr" />
      <header>
        <div className={selected === "Fish" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('AllPrices'); setFilterValue(''); }}>Critters</div>
        <div className={selected === "YourList" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('YourList'); setFilterValue(''); }}>Saved List</div>
        <div className={selected === "Misc" ? "tabs tab-bkg" : "tabs"} onClick={() => { setSelected('Misc'); setFilterValue(''); }}>Misc Prices</div>
      </header>
      <div className="wrap">
        <div className="search">
          <input type="text" value={filterValue} onChange={(e) => handleFilterChange(e)} className="searchTerm" placeholder="Search Here" />
          <button type="submit" className="searchButton" onClick={(e) => { setFilterValue(''); handleFilterChange(e); } }>
            X
          </button>
        </div>
      <div className="list-top">
        <label htmlFor="filter">Search Filter:</label>
        <select name="filters" id="filter" onChange={(e) => setFilterby(e.target.value)}>
          <option value="name" defaultValue>Name</option>
          <option value="price">Price</option>
          <option value="location">Location</option>
          {selected === "Misc" ? '' : <option value="northDate">Dates (Northern)</option>}
          {selected ==="Misc" ? '' : <option value="southDate">Dates (Southern)</option>}
        </select>
      </div>
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
