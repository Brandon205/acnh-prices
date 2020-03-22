import React, { useState } from 'react';
import Fish from './Fish';
import Bugs from './Bugs';
import AllPrices from './AllPrices';

export default function App() {
  const [selected, setSelected] = useState('AllPrices');

  let content;
  switch(selected) {
    case 'Fish':
      content = (<Fish />);
      break;
    case 'Bugs':
      content = (<Bugs />);
      break;
    case 'AllPrices':
      content = (<AllPrices />);
      break;
  }

  return (
    <div>
      <div className="tabs" onClick={() => setSelected('Fish')}>Fish</div>
      <div className="tabs" onClick={() => setSelected('AllPrices')}>AllPrices</div>
      <div className="tabs" onClick={() => setSelected('Bugs')}>Bugs</div>
      {content}
    </div>
  )
}
