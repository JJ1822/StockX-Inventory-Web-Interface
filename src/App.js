import React, { Component } from 'react';
import Shelve from './shelve_spot';

class App extends Component {
  render() {

    var spot = Array(25).fill().map((_, i) => {
      return <Shelve key={i} />
      });

    return (
      <div>
        <h1>StockX Inventory System</h1>
        <div className="wrapper">
          {spot}
        </div>
      </div>

    );
  }
}

export default App;
