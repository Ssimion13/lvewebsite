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
        <Button onClick={this.toggle} className="videoButton"> Watch Video 
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
          <div className="videoWrapper">
            <iframe title="YouTube video player" className="youtube-player" type="text/html" 
                width="640" height="390" src="https://www.youtube.com/embed/ngfaCPHcJFM"
                frameBorder="0" allowFullScreen></iframe>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close </Button>
          </ModalFooter>
        </Modal>
        </Button>
    );
  }
}

export default VideoModal;