import React, { Component } from 'react';
import Shelve from './shelve_spot';

class App extends Component {
  render() {

    var spot = Array(25).fill().map((_, i) => {
      return <Shelve key={i} />
      });

    return (
      <div className="wrapper">
        {spot}
      </div>
    );
  }
}

export default App;
