
import React, { useContext } from 'react';
import { CounterContext } from '../counter-context';


const Incrementer = () => {

  const style = {
    height: '3em',
  }

  return (
    <CounterContext.Consumer>
      {context => (
        <button style={style} onClick={() => context.increment()}> + </button>
      )}
    </CounterContext.Consumer>
  )

}

export default Incrementer;
