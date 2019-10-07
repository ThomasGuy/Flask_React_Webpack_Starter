/* eslint-disable react/state-in-constructor */
import React from "react";
import openSocket from 'socket.io-client';


class FrontPage extends React.Component {
  state = {
    message: false,
    endpoint: "http://localhost:5000",
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = openSocket(endpoint);
    socket.on("connect", () => {
      this.setState({ message: 'connected' });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div className="sport">
        <a href="./api/ticker">Tickers</a>
        {message
          ? <p>
            React FrontPage: {message} °F
          </p>
          : <p>Connecting...</p>}
      </div>
    );
  }
}


export default FrontPage;
