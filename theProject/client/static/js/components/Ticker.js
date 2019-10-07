/* eslint-disable react/require-default-props */


import React from "react";
import PropTypes from "prop-types";
import Coin from "./Coin";

const Ticker = ({ tickers }) => (
  <div className="sport2">
    <h2>Tickers</h2>
    <div className="fishes">
      <ul className="tickList">
        {Object.keys(tickers).map((key) => (
          <Coin key={key} aKey={key} aValue={tickers[key]} />
        ))}
      </ul>
    </div>
  </div>
);

Ticker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tickers: PropTypes.object,
};

export default Ticker;
