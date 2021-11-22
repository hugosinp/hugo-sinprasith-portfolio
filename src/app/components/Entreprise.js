import React from 'react'

import { Row, Col, Tab, Nav } from 'react-bootstrap'
import ATitle from './aTitle'
import AParagraph from './aParagraph'

const Entreprise = ({ id, className, data }) => {
    return (
        <div>
            <Tab.Container defaultActiveKey="1" >
                <Row className="m-auto" style={{ width: "800px" }}>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column pt-2">
                            {    
                                data.map(entreprise => (
                                    <Nav.Item>
                                        <Nav.Link eventKey={entreprise.id}>
                                            {entreprise.name}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {
                                data.map(item => (
                                    <Tab.Pane eventKey={item.id}>
                                        <h3>
                                            {item.job} <div className={`${item.image}`} />
                                        </h3>
                                        <AParagraph
                                            className="text-muted"
                                            text={item.date}
                                        />
                                        <ul>
                                            <li>
                                                {item.description.paragraph1}
                                            </li>
                                            <li>
                                                {item.description.paragraph2}
                                            </li>
                                            <li>
                                                {item.description.paragraph3}
                                            </li>
                                        </ul>
                                        <AParagraph
                                            className="text-muted"
                                            text={item.tech}
                                        />
                                    </Tab.Pane>
                                ))
                            }
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Entreprise
