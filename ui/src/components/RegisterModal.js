import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import RegisterForm from './RegisterForm';

class RegisterModal extends React.Component {
    render() {
        return (
            <Modal
            {...this.props}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Register
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <RegisterForm/>
              </Modal.Body>
              
            </Modal>
          );
    }
}

export default RegisterModal