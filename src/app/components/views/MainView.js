import React from 'react'

import { Row, Col } from 'react-bootstrap'

import ALink from '../aLink'
import ATitle from '../aTitle'

import { mainDico } from '../../static/dico'

const MainView = () => {

    const {
        MAIN_HEAD,
        MAIN_SUBHEAD
    } = mainDico

    return (
        <div>
            <Row>
                <Col className="mainBg text-center text-light">
                    <div style={{ position:'absolute', top:"30%", left: "20%", right: "20%" }}>
                        <ATitle 
                            className="bold"
                            heading_tag="h1" 
                            text={MAIN_HEAD}
                        />
                        <ATitle 
                            heading_tag="h4" 
                            text={MAIN_SUBHEAD}
                        />
                    </div>
                    <div style={{ position:'absolute', top:"70%", left: "20%", right: "20%" }}>
                        <ALink
                            className="shadow"
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
