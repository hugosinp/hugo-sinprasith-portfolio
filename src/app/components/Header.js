import React, { useState, useEffect } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 800) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div>
            <Navbar className={navbar ? "navbar-scrolled navbar-dark" : "navbar-notscrolled navbar-dark"} scrolling  fixed="top"  expand="lg">
                <Container className="text-light">
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
