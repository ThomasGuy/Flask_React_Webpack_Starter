/* eslint-disable react/state-in-constructor */
import React from "react";
import Ticker from "./Ticker";

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: {},
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ isLoaded: true });
        this.setState({ items: myJson });
        // this.setState({ items: myJson });
        console.log("Ahoy", JSON.stringify(myJson));
      });
  }

  addCoins = (coin) => {
    const coins = { ...this.state.items };
    coins[coin.key()] = coin.value();
    this.setState({ coins });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Ticker items={items} />
      </div>
    );
  }
}

export default App;
