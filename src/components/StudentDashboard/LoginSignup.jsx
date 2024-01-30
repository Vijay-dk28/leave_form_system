import React from 'react'
import '../asserts/css/LoginSignup.css'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const LoginSignup = () => {
    const navigate = useNavigate();
  return (
    <div className="bg">
        <div className='color-overlay  d-flex justify-content-center align-items-center'>
            
            <Form className='rounded p-4 p-sm-4 '>
                <FormLabel className='mt-4 pb-2 d-flex justify-content-center align-items-center fw-bold  label '>Login</FormLabel>
                <FormGroup className='mb-3 ms-4 me-4 textcontain' controlId='formBasicEmail'>
                    <FormLabel>Username:</FormLabel>
                    <FormControl type='email' placeholder='Enter your Email'></FormControl>
                    <Form.Text className='text-muted'>We'll never share your email with anyone       </Form.Text>
                </FormGroup>
                <FormGroup className='mb-3 ms-4 me-4 textcontain' controlId='formBasicPassword'>
                    <FormLabel>Password:</FormLabel>
                    <FormControl type='password' placeholder='Enter your Password'></FormControl>
                </FormGroup>
                <FormGroup className='mb-3 ms-4 me-4 textcontaincheck' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label="Remember me"/>
                </FormGroup>
                <FormGroup className='first'>
                    <Form.Label className='ms-4 sec'>New User  <span onClick={() =>navigate('signup')} className='
                    mid'>Click me</span></Form.Label>
                </FormGroup>
                <Button  type='submit' className='mt-3 mb-3 ms-4 me-4 con' onClick={() =>navigate ('main')}>
                    Login
                </Button>
            </Form>
        </div>
    </div>

  )
}
