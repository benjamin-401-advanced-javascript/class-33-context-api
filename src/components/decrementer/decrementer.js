
import React, { useContext } from 'react';
import { CounterContext } from '../counter-context';


const Decrementer = () => {
  const context = useContext(CounterContext);

  const style = {
    height: '3em',
  }

  return (
    <button style={style} onClick={() => context.decrement()}> - </button>
  )

}

export default Decrementer;
