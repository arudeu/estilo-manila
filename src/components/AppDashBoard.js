import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function AppDashBoard() {
  return (

  	<div>
  	<h1 className="d-flex justify-content-md-center">Admin Dashboard</h1>
  	<div className="d-flex justify-content-md-center mb-5">
  	<Button variant="light" className="btn btn-outline-dark me-3">Add New Product</Button>{' '}
  	<Button variant="light" className="btn btn-outline-dark">Show User Orders</Button>{' '}
  	</div> 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sample Name: pikachu shirt</td>
          <td>Sample Description: Premium pikachu shirt</td>
          <td>3199</td>
          <td>Available</td>
          <td><div><Button variant="light" className="btn btn-outline-dark">Update</Button>{' '}</div>
          		 <Button variant="light" className="btn btn-outline-danger">Disable</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default AppDashBoard;