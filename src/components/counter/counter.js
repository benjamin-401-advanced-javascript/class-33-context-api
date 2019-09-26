import React from 'react';

import { CounterContext } from '../counter-context';

const style = {
    display: 'inline-block',
    fontSize: '1em',
    border: '2px solid #444',
    borderRadius: '50%',
    lineHeight: '5em',
    textAlign: 'center',
    width: '5em',
}

class Count extends React.Component {

  render() {
    let context = this.context;

    return (
        <span style={style}>{context.count}</span>
    );

  }
}
Count.contextType = CounterContext;

export default Count;
