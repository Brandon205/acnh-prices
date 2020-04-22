import React, { useState } from 'react';

export default function Fish(props) {
    const [modal, setModal] = useState('');
    var formatter = new Intl.NumberFormat();
    
    let mappedFish = props.fish.map( (fish, id) => <div className="animal" key={id} onClick={() => expand(fish)}>{fish.name} <p className="prices">{formatter.format(fish.price)}<img className="bells-img" src={process.env.PUBLIC_URL + "/images/BellIcon.png"} alt="bell icon" /></p></div> );

    let expand = (fish) => {
        let content = (
        <div className="modal" onClick={() => setModal('')}>
                <div className="modal-content">
                    <img src={process.env.PUBLIC_URL + '/images/' + fish.name + '.png'} alt={fish[0]} />
                    <h1>{fish.name}</h1>
                    <hr />
                    <h3>Swims around the {fish.location}</h3>
                    <h3>Sells for {formatter.format(fish.price)} bells</h3>
                    <h3>{fish.time}</h3>
                    <h3>{fish.months}</h3>
                    <i>N - Northern Hemishpere, S - Southern Hemishpere</i>
                </div>
            </div>
        )
        setModal(content);
    }
    
    return (
        <div className="price-list">
            {mappedFish}
            {modal}
        </div>
    )
}
