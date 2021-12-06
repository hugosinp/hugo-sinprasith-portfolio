import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import { switchLanguage } from '../../redux/actions/appActions'

import { frDico, engDico} from '../../static/dico'
import usIcon from '../../static/img/us.png'
import franceIcon from '../../static/img/france.png'

const AHeader = () => {

    const dispatch = useDispatch()

    const myApp = useSelector(state => state.myApp)
    const {
        usLang
    } = myApp

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 800) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }

    let HEADER_SKILLS = "";
    let HEADER_PROJECTS = "";

    if (usLang) {
        HEADER_SKILLS = engDico.HEADER_SKILLS
        HEADER_PROJECTS = engDico.HEADER_PROJECTS
    } else {
        HEADER_SKILLS = frDico.HEADER_SKILLS
        HEADER_PROJECTS = frDico.HEADER_PROJECTS
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div>
            <Navbar className={navbar ? "navbar-scrolled navbar-dark fade-in" : "navbar-notscrolled navbar-dark fade-in"} scrolling  fixed="top"  expand="lg">
                <Container className="text-light">
                    <Navbar.Brand className="bold rotate-logo" href="/">
                        <i class="fas fa-moon"></i> HSinp
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="mx-3" href="#bioSection">Bio</Nav.Link>
                            <Nav.Link className="mx-3" href="#skillSection">{HEADER_SKILLS}</Nav.Link>
                            <Nav.Link className="mx-3" href="#projectSection">{HEADER_PROJECTS}</Nav.Link>
                            <Nav.Link className="mx-3" href="#contactSection">Contact</Nav.Link>
                        </Nav>
                        <Nav className="">
                            <Nav.Link className="m-auto" onClick={() => (dispatch(switchLanguage()))}>
                                {
                                    usLang === true ?
                                        <Image src={usIcon} height="25px" alt="United States logo" rounded />
                                    :
                                        <Image src={franceIcon} height="25px" alt="France logo" rounded />
                                }
                            </Nav.Link>
                            <Nav.Link className="m-auto" href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" target="_blank">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </Nav.Link>
                            <Nav.Link className="m-auto" href="https://github.com/hugosinp" target="_blank">
                                <i class="fab fa-github fa-lg"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AHeader
