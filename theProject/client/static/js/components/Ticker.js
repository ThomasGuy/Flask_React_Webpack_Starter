/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
// import PropTypes from "prop-types";
import Coin from "./Coin";

const Ticker = ({ items }) => (
  <div className="sport">
    <h2>Tickers</h2>
    <div className="fishes">
      <ul className="tickList">
        {Object.keys(items).map((key) => (
          <Coin key={key} aKey={key} aValue={items[key]} />
        ))}
      </ul>
    </div>
  </div>
);

// Ticker.propTypes = {
//   items: PropTypes.object,
// };

export default Ticker;