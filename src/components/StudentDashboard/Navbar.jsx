import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import ProLogo from '../asserts/images/ProLogo.png'
import '../asserts/css/Main.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <>
      <Navbar.Brand>
        <img src={ProLogo} className='logo'/>
      </Navbar.Brand>
      <Navbar  expand="lg" bg="dark" variant="dark">
      <Container className='ms-5 navcontain'>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='text-light'>
          <Nav className="me-auto">
          <Nav.Link className=' ms-2 navclick me-2' onClick={() =>navigate('/')}>Home</Nav.Link>
          <NavDropdown title="General" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave=      {hideDropdown} className='navclick'>
              <NavDropdown.Item href="#action/3.1">OD Form</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bonafide Form</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Activity Form</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() =>navigate('/name')} className='ms-2 navclick' >Request Leave</Nav.Link>
            <Nav.Link className=' ms-2 navclick'>Attendance</Nav.Link>
            <Nav.Link className=' ms-2 navclick'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      </>
  );
};

export default Home;
