import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar  scrolling dark fixed="top" variant="dark" expand="lg">
                <Container className="px-5">
                    <Navbar.Brand className="bold px-5" href="/">
                        HSinp
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto px-5">
                            <Nav.Link className="px-4" href="#bioSection">Bio</Nav.Link>
                            <Nav.Link className="px-4" href="#skillSection">Skills & Tech Stack</Nav.Link>
                            <Nav.Link className="px-4" href="#projectSection">Projects</Nav.Link>
                            <Nav.Link className="px-4" href="#contactSection">Contact</Nav.Link>
                        </Nav>
                        <Nav className="px-5">
                            <Nav.Link href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" target="_blank">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </Nav.Link>
                            <Nav.Link href="https://github.com/hugosinp" target="_blank">
                                <i class="fab fa-github fa-lg"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
