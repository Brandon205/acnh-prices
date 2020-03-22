import React from 'react';

export default function Bugs(props) {
    let mappedBugs = props.bugs.map( (bug, id) => <div className="bug" key={id}>{bug[0]} <p className="prices">{bug[1]}</p> </div>);

    return (
        <div className="bugs">
            <h1>Bugs:</h1>
            {mappedBugs}
        </div>
    )
}
