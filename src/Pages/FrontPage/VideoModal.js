import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';




class VideoModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(props) {
    return (
      <div>
        <Button outline onClick={this.toggle}> Watch Video </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;