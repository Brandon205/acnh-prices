import React, { useState } from 'react';

export default function Bugs(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let mappedBugs = props.bugs.map( (bug, id) => <div className="animal" key={id} onClick={() => expand(bug)}>{bug.name} <p className="prices">{formatter.format(bug.price)}</p> </div>);

    let expand = (bug) => {
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + bug.name + '.png'} alt={bug[0]} />
                    <h1>{bug.name}</h1>
                    <hr />
                    <h3>{bug.location}</h3>
                    <h3>Sells for {formatter.format(bug.price)} bells</h3>
                    <h3>{bug.time}</h3>
                    <h3>{bug.months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }

    return (
        <div className="price-list">
            {mappedBugs}
            {modal}
        </div>
    )
}
