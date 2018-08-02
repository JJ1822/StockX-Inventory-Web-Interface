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
        <footer>
            <div class="footer-icon">
              <a href="https://www.linkedin.com/in/jay-johnson-4b577341/" class="link" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/JJ1822" class="git" target="_blank">
                <i class="fab fa-github github"></i>
              </a>
              <a href="https://jayjohnson.info" class="angel" target="_blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </div>
            <div class="">
              <p>
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>
                Jay Brandon Johnson
              </p>
            </div>
      </footer>

      </div>

    );
  }
}

export default App;
