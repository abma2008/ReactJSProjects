import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
const NavHeader = () => {
    const [logo, setLogo] = useState(`ReactJS`);
    const setLogoHandler = (e) => {
        e.preventDefault();
        setLogo(document.getElementById(`search-text`).value)
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">{logo}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/create">Create</Nav.Link>
                            <Nav.Link href='/read' >Read</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                id='search-text'
                            />
                            <Button variant="outline-success" onClick={setLogoHandler}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavHeader
