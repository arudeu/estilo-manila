import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import QuantitySelector from "./QuantitySelector"
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';

function AppCart() {
  return (
    <Table striped bordered hover className="container">
    <thead>
    <tr>
{/*This is the header*/}
    <th colspan={5}>RED DRAGON ANVIL STEREO GAMING SPEAKER</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <th>
            Image: 
          </th>
        </td>
  {/*Description*/}
        <td>
          <th> 
            Description:
          </th>
        </td>
        <td>
          <th>
            Price:
          </th>
        </td>
        <td>
          <th>
            Subtotal:
          </th>
        </td>
        <td>
          <th>
            Actions:
          
          </th>
        </td>
      </tr>
    <tr>
      <td>
        <Image src="../../Logo/estilo-manila.png" 
          fluid
          width={150}
          height={150}
          />
      </td>
      <td>
        The Reddragon GS520 ANVIL 2 x 3W RGB PC Speakers is a great way to add some sound to your PC or laptop. It features a sleek design with RGB lighting, 2 x 3W speakers and USB and 3.5mm connectors.
        <tr>
          <td>
            <th>
              Quantity:
            </th>
              {<QuantitySelector />}
          </td>
        </tr>
            
      </td>
      <td id="Price">
        2391
      </td>
      <td id="Subtotal">
        2391
      </td>
      <td>
        <Button variant="outline-danger">Remove</Button>{' '}
      </td>
    </tr>


    <tr>
      <td colspan={2} m={8}>
      <Button variant="outline-success">Checkout</Button>{' '}
      </td>
      <td colspan={3} m={4}>
        <th><h3>TOTAL:</h3> 
        </th>
      </td>
    </tr>
    </tbody>

      <div>
        <Button variant="outline-danger" className="m-2">Clear Cart</Button>{' '}
      </div>
    </Table>

    );
}

export default AppCart;