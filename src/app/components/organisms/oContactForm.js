import React from 'react'

import { Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'

import '../../static/scss/organisms/oContactForm.scss'

const OContactForm = () => {
    return (
        <div>
            <Form className="bg-soft-blue text-light shadow o-contactForm">
                <Row className="text-center">
                    <ATitle 
                        className="mb-4 bold"
                        heading_tag="h1"
                        text="Let's talk !"
                    />
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Enter your name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} sm controlId="formGridEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <FloatingLabel controlId="floatingSelect" label="Type of inquiry">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">Collaboration</option>
                                <option value="2">Business</option>
                                <option value="3">Other</option>
                            </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formGridAddress2">
                    <FloatingLabel controlId="floatingTextarea2" label="Add your message !">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Row>
                    <Button id="submitButton" className="zoom bold" type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default OContactForm
