import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import QuantitySelector from "./QuantitySelector"
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';

function AppCart() {
  return (
    <Table striped bordered hover className="container mt-5">
      <thead>
        <tr>
          <th colSpan={5}>RED DRAGON ANVIL STEREO GAMING SPEAKER</th>
        </tr>
        <tr>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Subtotal</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Image 
              src="../../Logo/estilo-manila.png" 
              fluid
              width={150}
              height={150}
            />
          </td>
          <td>
            The Reddragon GS520 ANVIL 2 x 3W RGB PC Speakers is a great way to add some sound to your PC or laptop. 
            It features a sleek design with RGB lighting, 2 x 3W speakers, and USB and 3.5mm connectors.
            <div>
              <span>Quantity:</span>
              <QuantitySelector />
            </div>
          </td>
          <td id="price">2391</td>
          <td id="subtotal">2391</td>
          <td>
            <Button variant="outline-danger">Remove</Button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <Button variant="outline-success">Checkout</Button>
          </td>
          <td colspan={3}>
            <h3>TOTAL:</h3>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}>
            <Button variant="outline-danger" className="m-2">Clear Cart</Button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default AppCart;