import {
  Modal,
  Button,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";

export default function AddProductModal() {
  return (
    <>
      <Modal>
        <ModalHeader>
          <ModalTitle>Add Product</ModalTitle>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button className="btn btn-dark">Cancel</Button>
          <Button className="btn btn-dark">Add Product</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
