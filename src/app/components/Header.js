import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar  scrolling dark fixed="top" variant="dark" expand="lg">
                <Container className="">
                    <Navbar.Brand className="bold rotate-logo" href="/">
                        <i class="fas fa-moon"></i> HSinp
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link className="" href="#bioSection">Bio</Nav.Link>
                            <Nav.Link className="" href="#skillSection">Skills & Tech Stack</Nav.Link>
                            <Nav.Link className="" href="#projectSection">Projects</Nav.Link>
                            <Nav.Link className="" href="#contactSection">Contact</Nav.Link>
                        </Nav>
                        <Nav className="">
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
