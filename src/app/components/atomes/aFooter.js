import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Row } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'

import { FR_DICO, ENG_DICO } from '../../static/dico'
import "../../static/scss/atomes/aFooter.scss"

const AFooter = () => {

    const myApp = useSelector(state => state.myApp)
    const {
        us_lang
    } = myApp

    let FOOTER_HEAD = "";
    let FOOTER_TEXT = "";

    if (us_lang) {
        FOOTER_HEAD = ENG_DICO.FOOTER_HEAD
        FOOTER_TEXT = ENG_DICO.FOOTER_TEXT
    } else {
        FOOTER_HEAD = FR_DICO.FOOTER_HEAD
        FOOTER_TEXT = FR_DICO.FOOTER_TEXT
    }

    return (
        <div>
            <footer className="text-center">
                <Container className="text-center p-4 text-light bg-dark" fluid>
                    <Row className="a-footer-row">
                        <section>
                            <a className="text-light mx-2" href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin fa-3x"></i>
                            </a>
                            <a className="text-light mx-2" href="https://github.com/hugosinp" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                        </section>
                    </Row>
                    <Row className="a-footer-row">
                        <section>
                            <AParagraph
                                className="text-center"
                                text={FOOTER_HEAD}
                            />
                            <AParagraph
                                className="text-center"
                                text={FOOTER_TEXT}
                            />
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
