/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
import React from "react";
import openSocket from 'socket.io-client';
import Ticker from "./Ticker";

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    tickers: {},

  };

  componentDidMount() {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ tickers: myJson });
        this.setState({ isLoaded: true });
      });
  }

  addCoins = (coin) => {
    const coins = { ...this.state.tickers };
    coins[coin.key()] = coin.value();
    this.setState({ tickers: coins });
  };

  render() {
    const { error, isLoaded, tickers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Ticker tickers={tickers} />
      </div>
    );
  }
}

export default App;
