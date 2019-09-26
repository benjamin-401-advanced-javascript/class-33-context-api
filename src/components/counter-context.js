
import React from 'react';

export const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    }
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  decrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default CounterProvider;
