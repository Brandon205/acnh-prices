import React, { useState } from 'react';

export default function Bugs(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();

    let mappedBugs = props.bugs.map( (bug, id) => <div className="animal" key={id} onClick={() => expand(bug)}>{bug[0]} <p className="prices">{bug[1].price === "N/A" ? bug[1].price : formatter.format(bug[1].price)}</p> </div>);

    let expand = (bug) => {
        let content = (
            <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + bug[0] + '.png'} alt={bug[0]} />
                    <h1>{bug[0]}</h1>
                    <hr />
                    <h3>{bug[1].location}</h3>
                    <h3>Sells for {bug[1].price === "N/A" ? bug[1].price : formatter.format(bug[1].price)} bells</h3>
                    <h3>{bug[1].time}</h3>
                    <h3>{bug[1].months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }

    return (
        <div className="price-list">
            <h1>ACNH Bugs:</h1>
            {mappedBugs}
            {modal}
        </div>
    )
}
