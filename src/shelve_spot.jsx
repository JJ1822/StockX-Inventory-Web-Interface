import React from 'react';


class Shelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "brand",
      style: "style",
      size: "12",
      upc_id: "0000"
    }

    this.count = 0;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });

  }


  render() {
    return (
      <div>
        <ul>
          <li>{this.state.brand}</li>
          <li>{this.state.style}</li>
          <li>{this.state.size}</li>
          <li>{this.state.upc_id}</li>
        </ul>
      </div>
    )
  }

}

export default Shelve;
