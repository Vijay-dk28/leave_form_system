import React from 'react'
import './LoginSignup'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
    const navigate=useNavigate();
  return (
    <div className="bg">
        <div className='color-overlay d-flex justify-content-center align-items-center'>
            <Form className='rounded p-4 p-sm-5 '>
                <FormLabel className='mt-4 pb-2 d-flex justify-content-center align-items-center fw-bold  label '>Sign Up</FormLabel>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>FirstName:</FormLabel>
                        <FormControl type='text' placeholder='Enter your FirstName'></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Lastname:</FormLabel>
                        <FormControl type='text' placeholder='Enter your Lastname'></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Roll Number:</FormLabel>
                        <FormControl type='text' placeholder='Enter your Roll Number'></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Date Of Birth:</FormLabel>
                        <FormControl type='date' ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Enter your Degree:</FormLabel>
                            <select>
                                <option value="" disabled selected hidden>Select</option>
                                <option>Btech</option>
                                <option>B.E</option>
                            </select>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Enter your Department:</FormLabel>
                            <select>
                                <option value="" disabled selected hidden>Select</option>
                                <option>Information Technology</option>
                                <option>Computer Science and Engineering</option>
                                <option>Computer Science and Design</option>
                                <option>Computer Science and Technology</option>
                                <option>Electronics and Communication Engineering</option>
                                <option>Electrical and Electronics Engineering</option>
                                <option>Civil Engineering</option>
                                <option>Mechanical Engineering</option>
                                <option>Artifical Intelligence and Data Science</option>
                            </select>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Username:</FormLabel>
                        <FormControl type='email' placeholder='Enter your Email'></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Password:</FormLabel>
                        <FormControl type='password' placeholder='Enter your Password'></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3  textcontain' controlId='formBasicEmail'>
                        <FormLabel>Re-enter Your Password:</FormLabel>
                        <FormControl type='password' placeholder='Enter your Password again'></FormControl>
                    </FormGroup>
                <Button  type='submit' className='mt-3 mb-3  con' onClick={() =>navigate ('/')}>
                    Sign Up
                </Button>
            </Form>
        </div>
    </div>
  )
}
