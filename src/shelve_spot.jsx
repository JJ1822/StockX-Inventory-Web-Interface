import React from 'react';
import ShowFormItem from './show_form';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Shelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      brand: "",
      style: "",
      size: "",
      upc_id: ""
    }

    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteShoe = this.deleteShoe.bind(this);
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
          <button
            className="something"
            onClick={this.openModal}
            >
            <img src={window.location.origin + '/image/plus.svg'} />
          </button>
        </div>
      ) } else {
        return (
          <div>
            <ul>
              <li>{this.state.brand}</li>
              <li>{this.state.style}</li>
              <li>{this.state.size}</li>
              <li>{this.state.upc_id}</li>
            </ul>
            <button
              onClick={this.openModal}
              >
              Edit
            </button>
            <button
              onClick={this.deleteShoe}
              >
              Delete
            </button>
          </div>
          )
      }
  }


  render() {
    return (
      <div className="shelve">
        {this.noShoe()}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <ShowFormItem
          update={this.update}
          brand={this.state.brand}
          style={this.state.style}
          size={this.state.size}
          upcId={this.state.upc_id}
          closeModal={this.closeModal}
          />
        </Modal>
      </div>
    )
  }

}

export default Shelve;
