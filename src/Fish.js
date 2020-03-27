import React, { useState } from 'react';

export default function Fish(props) {
    const [modal, setModal] = useState('');
    
    let mappedFish = props.fish.map( (fish, id) => <div className="animal" key={id} onClick={() => expand(fish)}>{fish[0]} <p className="prices">{fish[1].price}</p></div> );

    let expand = (fish) => {
        var formatter = new Intl.NumberFormat();
        let content = (
        <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <h1>{fish[0]}</h1>
                    <hr />
                    <h3>Swims around the {fish[1].location}</h3>
                    <h3>Sells for {formatter.format(fish[1].price)} bells</h3>
                    <h3>{fish[1].time}</h3>
                    <h3>{fish[1].months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }
    
    return (
        <div className="price-list">
            <h1>ACNH Fish:</h1>
            {mappedFish}
            {modal}
        </div>
    )
}
