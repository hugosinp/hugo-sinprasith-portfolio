import React from 'react'

import { Row, Col, Tab, Nav } from 'react-bootstrap'
import AParagraph from '../atomes/aParagraph'

import '../../static/scss/organisms/oEntrepriseTab.scss'

const OEntrepriseTab = ({ id, className, data }) => {
    return (
        <div>
            <Tab.Container className="o-entrepriseTab" defaultActiveKey="1" >
                <Row className="">
                    <Col sm={4}>
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
                    <Col sm={8}>
                        <Tab.Content className="m-auto">
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
                                        <small className="text-muted">
                                            {item.tech}
                                        </small>
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

export default OEntrepriseTab
