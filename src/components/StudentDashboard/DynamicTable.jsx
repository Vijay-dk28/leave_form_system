import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({ id: '', name: '', age: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const addRow = () => {
    setData([...data, inputData]);
    setInputData({ id: '', name: '', age: '' });
  };
return (
    <>
    <Navbar/>
    <div className="mx-5">
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Days</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <Form.Control
                type="text"
                name="id"
                value={inputData.id}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <Form.Control
                type="date"
                placeholder=""
                name="age"
                onChange={handleInputChange}
              />
            </td>
            <td >
              <Form.Control
                type="date"
                placeholder=""
                name="age"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <Button variant="success" size="sm" onClick={addRow}>
                Submit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
}