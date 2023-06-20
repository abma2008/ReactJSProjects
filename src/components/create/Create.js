import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormLabel } from 'react-bootstrap';
import '../../css/create.css';




const Create = () => {
    // setting up variables
    const [firstname, setFirstname] = useState(``);
    const [lastname, setLastname] = useState(``);
    const [email, setEmail] = useState(``);
    // creating a function to send data to the online API:
    const sendDataToAPI = () => {
        if (!firstname || !lastname || !email) {
            alert(`Missing Information, please fill out all the fields to continue`)
        }
        else {
            // axios.post(`https://648eab6875a96b6644442670.mockapi.io/users`,
            axios.post(`http://localhost:4000/users`,
                { firstname: firstname, lastname: lastname, email: email })
                .then((result) => {
                    if (result.status === 201) {
                        alert(`Post Successful`)
                        window.location.href = `/read`
                    }
                    else {
                        alert(`Posting unsuccessfull`);
                    }


                })

        }
    }
    return (
        <>
            <Form className='mt-4 m-auto form-data' method='POST' action='/read' autoComplete='off'>
                <h1>Applicants Form Registration</h1>
                <hr />
                <FormLabel>First Name:</FormLabel>
                <Form.Control type='text' name='firstname' onChange={(e) => setFirstname(e.target.value)} required></Form.Control>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type='text' name='lastname' onChange={(e) => setLastname(e.target.value)} required></Form.Control>
                <FormLabel>Enter Email Address</FormLabel>
                <Form.Control type='email' name='email' onChange={(e) => setEmail(e.target.value)} required></Form.Control>
                <Button variant='success' className='mt-2' onClick={sendDataToAPI}>Submit</Button>
            </Form>

        </>
    )
}

export default Create;
