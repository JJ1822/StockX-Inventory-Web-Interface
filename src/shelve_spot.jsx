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
      id: "",
      brand: "",
      style: "",
      size: "",
      upc_id: ""
    }

    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleClick() {

  }

  noShoe() {
    if(!this.state.id) {
      return (
        <div>
          <button
            className="something"
            onClick={this.openModal}
            >
            <img src={window.location.origin + '/image/plus.svg'} />
          </button>
        </div>
      ) } else {
        return (
            <ul>
              <li>{this.state.brand}</li>
              <li>{this.state.style}</li>
              <li>{this.state.size}</li>
              <li>{this.state.upc_id}</li>
            </ul>
          )
      }
  }


  render() {
    return (
      <div>
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
          />
        </Modal>
      </div>
    )
  }

}

export default Shelve;
