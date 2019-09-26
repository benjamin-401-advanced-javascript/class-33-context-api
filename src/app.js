import React from 'react';

import Counter from './components/counter/counter';
import Decrementer from './components/decrementer/decrementer';
import Incrementer from './components/incrementer/incrementer';

const style = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '40%',
}

export default class App extends React.Component {

  render() {
    return (
      <>
        <div style={style}>
          <Decrementer />
          <Counter />
          <Incrementer />
        </div>
      </>
    );
  }
}
