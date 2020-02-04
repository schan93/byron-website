import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalOffer = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={() => props.toggle(!props.modal)}>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalBody>
        {props.body}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => props.toggle(!props.modal)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalOffer;