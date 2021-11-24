import React from 'react'

import { Row, Col } from 'react-bootstrap'

import ALink from '../atomes/aLink'
import ATitle from '../atomes/aTitle'

import { mainDico } from '../../static/dico'
import '../../static/scss/views/mainView.scss'

const MainView = () => {

    const {
        MAIN_HEAD,
        MAIN_SUBHEAD
    } = mainDico

    return (
        <div>
            <Row>
                <Col className="mainBg text-center text-light">
                    <div className="mainHeading">
                        <ATitle
                            className="bold fade-in"
                            heading_tag="h1" 
                            text={MAIN_HEAD}
                        />
                        <ATitle 
                            className="fade-in"
                            heading_tag="h4" 
                            text={MAIN_SUBHEAD}
                        />
                    </div>
                    <div className="secondHeading">
                        <ALink
                            className="shadow fade-in"
                            background="bg-dark-red"
                            href="#bioSection"
                            text="Explore >>"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainView
