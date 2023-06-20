import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Notfound from '../Notfound';

const Read = () => {
    const [showData, setShowData] = useState([])
    const [check, setCheck] = useState(0);
    useEffect(() => {
        // https://648eab6875a96b6644442670.mockapi.io/users
        axios.get(`http://localhost:4000/users`)
            // axios.get(`http://localhost:4000/users`)
            .then((response) => {
                setShowData(response.data);
                if (response.data.length) {
                    setCheck(1);
                }
            })
    }, [])
    // creating deleteAllButton:
    const deleteAllButton = () => {
        // https://648eab6875a96b6644442670.mockapi.io/users
        axios.get(`http://localhost:4000/users`)
            .then(response => {
                return response.data
            })
            .then(data => {

                data.map(item => {
                    // https://648eab6875a96b6644442670.mockapi.io
                    axios.delete(`http://localhost:4000/users/${item.id}`)

                })
                alert(`All records have been deleted`);
                window.location.href = `/read`

            })
    }
    // Update Button:
    const updateButton = (e) => {
        localStorage.setItem(`id`, e.target.getAttribute(`id`))
        localStorage.setItem(`firstname`, e.target.getAttribute(`data-first`))
        localStorage.setItem(`lastname`, e.target.getAttribute(`data-last`))
        localStorage.setItem(`email`, e.target.getAttribute(`data-email`))
    }
    // This is the delete Button:
    const deleteButton = (e) => {

        // https://648eab6875a96b6644442670.mockapi.io/users/
        axios.delete(`http://localhost:4000/users/${e.target.id}`)
            .then(response => {
                return response
            }).then(response => {
                response.status === 200 ? alert(`The Record has been deleted`) : alert(`The record is not deleted`);
                window.location.href = `/read`
            })
    }
    return (
        <>
            <div className='d-flex justify-content-evenly m-auto bg-secondary'>
                <Link to='/create'>
                    <Button variant='primary m-2'>Go Back</Button>
                </Link>
                <Link to='/read'>
                    <Button variant='danger m-2' onClick={deleteAllButton}>Delete All</Button>
                </Link>
            </div>
            {
                check ? (
                    <div style={{ overflowX: `auto`, padding: `10px` }}>
                        <Table striped bordered hover size="lg" className='w-75 mt-2 m-auto'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showData.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td id='firstname'>{item.firstname}</td>
                                                <td id='lastname'>{item.lastname}</td>
                                                <td id='email'>{item.email}</td>
                                                <td>
                                                    <Link to='/update'>
                                                        <Button variant='warning' id={item.id} data-first={item.firstname} data-last={item.lastname} data-email={item.email} onClick={updateButton}>
                                                            <i className='fa fa-edit fa-lg'></i>
                                                        </Button>
                                                    </Link>

                                                </td>
                                                <td>
                                                    <Link to=''>
                                                        <Button variant='danger' id={item.id} data-first={item.firstname} data-last={item.lastname} data-email={item.email} onClick={deleteButton}>
                                                            <i className='fa fa-trash fa-lg'></i>
                                                        </Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>

                ) : (<Notfound />)
            }
        </>
    )
}

export default Read
