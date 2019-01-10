<<<<<<< HEAD
import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class Stock extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Container>
        {/* BUTTON */}
        <Button color="info" onClick={this.toggle}>Click</Button>
        {/* MODAL */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
=======
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Stock extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        let ModalBody;
        switch(this.props.which){
            case "NFL":
                ModalBody ="This is the Body for NFL";
                break;
            case "stocks":
                break;
        }
        const backdropStyle = {
            position: 'fixed',
            top: '-150px',
            left: '-16px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '50px',
            zIndex: 200,
            height: 'calc(100vh + 150px)',
            width: '100vw'
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30,
            color: "purple"
        };
        return (
            <div className="backdrop" style={ backdropStyle }>
                <div className="Cammodal" style={ modalStyle }>
                    <p>{this.props.children}</p>
                    <p>{ModalBody}</p>
                    <p>Modal Biotch</p>
                    <div className="footer">
                        <button onClick={this.props.onClose}>
                            Close
            </button>
                    </div>
                </div>
            </div>
        );
        
    }
}

Stock.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

>>>>>>> 48f33a8d820a614ee7d0006c467cb3cd86ab42f4
export default Stock;