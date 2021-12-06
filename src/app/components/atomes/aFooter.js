import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Row } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'

import { frDico, engDico } from '../../static/dico'
import "../../static/scss/atomes/aFooter.scss"

const AFooter = () => {

    const myApp = useSelector(state => state.myApp)
    const {
        usLang
    } = myApp

    let FOOTER_HEAD = "";
    let FOOTER_TEXT = "";

    if (usLang) {
        FOOTER_HEAD = engDico.FOOTER_HEAD
        FOOTER_TEXT = engDico.FOOTER_TEXT
    } else {
        FOOTER_HEAD = frDico.FOOTER_HEAD
        FOOTER_TEXT = frDico.FOOTER_TEXT
    }

    return (
        <div>
            <footer className="text-center">
                <Container className="text-center p-4 text-light bg-dark" fluid>
                    <Row className="a-footer-row">
                        <section>
                            <a className="text-light zoom mx-2" href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin fa-3x zoom"></i>
                            </a>
                            <a className="text-light mx-2" href="https://github.com/hugosinp" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github fa-3x zoom"></i>
                            </a>
                        </section>
                    </Row>
                    <Row className="a-footer-row text-center">
                        <section>
                            <AParagraph
                                className="text-center"
                                text={FOOTER_HEAD}
                            />
                            <p>
                                {FOOTER_TEXT} <a href="mailto:hugo.sinprasith@gmail.com" className="text-light italic">hugo.sinprasith@gmail.com</a>
                            </p>
                        </section>
                    </Row> 
                    
                </Container>
                <Container className="a-footer-row text-light m-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }} fluid>
                    Copyright &copy; HSinp
                </Container>
            </footer>
        </div>
    )
}

export default AFooter
