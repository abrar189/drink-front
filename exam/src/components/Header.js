import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">drink</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/favorite">fav</Nav.Link>
                            <Nav.Link href="/Home">home</Nav.Link>
                         
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
