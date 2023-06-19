import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Form, FormLabel } from 'react-bootstrap'
import axios from 'axios'


const Update = () => {
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        setFirstname(localStorage.getItem(`firstname`));
        setLastname(localStorage.getItem(`lastname`));
        setEmail(localStorage.getItem(`email`));
        setId(localStorage.getItem(`id`));
    }, [])
    // setting the function that will update the item:
    const updateItem = () => {
        axios.put(`https://648eab6875a96b6644442670.mockapi.io/users/${id}`, { firstname: firstname, lastname: lastname, email: email })
            .then(response => {
                return response;
            }).then(response => {
                response.status === 200 ? alert(`The Record has been updated`) : alert(`No Update is done`);
                window.location.href = `/read`
            })
    }
    return (
        <>
            <div className='w-75 mt-2 p-2 m-auto'>
                <Form>
                    <FormLabel>First Name: <b>{firstname}</b></FormLabel>
                    <Form.Control type='text' onChange={(e) => setFirstname(e.target.value)} setfocus></Form.Control>
                    <FormLabel>Last Name: <b>{lastname}</b></FormLabel>
                    <Form.Control type='text' onChange={(e) => setLastname(e.target.value)}></Form.Control>
                    <FormLabel>Email: <b>{email}</b></FormLabel>
                    <Form.Control type='text' onChange={(e) => setEmail(e.target.value)}></Form.Control>

                    <Button variant='success' onClick={updateItem}>Update</Button>



                </Form>

            </div>
        </>
    )
}

export default Update
