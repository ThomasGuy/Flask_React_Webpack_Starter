/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

class Coin extends React.Component {
  render() {
    const { aKey, aValue } = this.props;
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    return (
      <li className="single_coin">
        {aKey}: ${aValue}
      </li>
    );
  }
}

export default Coin;
