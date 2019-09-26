
import React, { useContext } from 'react';
import { CounterContext } from '../counter-context';


const Incrementer = () => {
  const context = useContext(CounterContext);

  const style = {
    height: '3em',
  }

  return (
    <button style={style} onClick={() => context.increment()}> + </button>
  )

}

export default Incrementer;
