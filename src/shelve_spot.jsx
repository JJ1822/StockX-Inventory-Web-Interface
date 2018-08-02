import React from 'react';
import ShowFormItem from './show_form';

class Shelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      brand: "",
      style: "",
      size: "",
      upc_id: ""
    }

    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteShoe = this.deleteShoe.bind(this);
    this.editShoe = this.editShoe.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  editShoe() {
    this.setState({
      displayForm: true
      });
  }

  deleteShoe() {
    this.setState({
      brand: "",
      style: "",
      size: "",
      upc_id: ""
      });
  }

  noShoe() {
    if(!this.state.brand && !this.state.size && !this.state.style && !this.state.upc_id) {
      return (
        <div className="new-shoe-wrapper">
          <h3>Shelf Available</h3>
          <button
            className="something"
            onClick={this.editShoe}
            >
            <img src={window.location.origin + '/image/plus.svg'} />
          </button>
        </div>
      ) } else {
        return (
          <div className="current-shoe-wrapper">
            <ul>
              <li><span>Brand:</span> {this.state.brand}</li>
              <li><span>Style:</span> {this.state.style}</li>
              <li><span>Size:</span> {this.state.size}</li>
              <li><span>Upc_Id:</span> {this.state.upc_id}</li>
            </ul>
            <button
              className="button"
              onClick={this.openModal}
              >
              Edit
            </button>
            <button
              className="button"
              onClick={this.deleteShoe}
              >
              Delete
            </button>
          </div>
          )
      }
  }


  render() {
    const shoeForm = () => {
      if(this.state.displayForm) {
        return (
          <ShowFormItem
            update={this.update}
            brand={this.state.brand}
            style={this.state.style}
            size={this.state.size}
            upcId={this.state.upc_id}
            closeModal={this.closeModal}
            />
        )
      } else {
        return (
          this.noShoe()
        )
      }
    }

    return (
      <div className="shelve">

        {shoeForm()}



      </div>
    )
  }

}

export default Shelve;

// <Modal
//   isOpen={this.state.modalIsOpen}
//   onRequestClose={this.closeModal}
//   style={customStyles}
//   contentLabel="Example Modal"
// >
//   </Modal>
