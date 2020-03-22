import React from 'react';
import bugs from './bugs.json';

export default function Bugs() {

    let bugEntries = Object.entries(bugs);
    let mappedBugs = bugEntries.map( (bug, id) => <div className="bug" key={id}>{bug[0]} <p className="prices">{bug[1]}</p> </div>);

    return (
        <div className="bugs">
            <h1>Bugs:</h1>
            {mappedBugs}
        </div>
    )
}
