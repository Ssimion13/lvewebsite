import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';




class ModalExample extends React.Component {
  
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
    const styles = {
      background: `URL(${this.props.image})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      opacity: `${this.props.opacity} || 1`,
      color: `${this.props.color}` || "white",
      width: "90%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
    return (
      <div style={styles} onClick={this.toggle}>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <img className="awardImage" alt={"image " + this.props.number } src={this.props.image} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;