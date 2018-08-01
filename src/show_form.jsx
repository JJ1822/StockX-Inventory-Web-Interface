import React from 'react';


class Shelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      brand: "brand",
      style: "style",
      size: "12",
      upc_id: "0000"
    }

    this.count = 0;
  }


  render() {
    return (
      <div>
        {this.noShoe()}
      </div>
    )
  }

}

export default Shelve;
