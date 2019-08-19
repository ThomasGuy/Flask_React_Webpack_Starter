import React from 'react';
import Footer from "./Footer";
import webpackgif from '../../assets/images/webpack.gif';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="sport">
        <div className="menu">
          <Footer imgline={webpackgif} />
        </div>
        <p>Ahoy</p>
      </div>
    );
  }
}

export default App;
