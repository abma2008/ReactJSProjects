import React from 'react'
import '../../css/home.css';

const Home = () => {
    return (
        <div className='content'>
            <h1>Welcome to CRUD Operations, ReactJS</h1>
            <hr />
            <h3 className='text-secondary'>
                This is an application in ReactJS Framework and we are using it to practice
                POST, GET, PUT, and DELETE.
            </h3>
            <p>
                This is a tutorial that covers some basic concepts of fetching process using axios library.
                The following lesson contains the following topics:
                <ul>
                    <li>the initial setup of reactJS application</li>
                    <li>The the process of dividing the project into folders</li>
                    <li>installation and usage of react-router-dom</li>
                    <li>installation and usage of react-bootstrap bootstrap</li>
                    <li>installation and usage of axios</li>
                </ul>
            </p>
        </div>
    )
}

export default Home
