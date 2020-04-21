import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import LoginForm from './LoginForm';

class LoginModal extends React.Component {
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
                  Log in
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <LoginForm/>
              </Modal.Body>
              
            </Modal>
          );
    }
}

export default LoginModal