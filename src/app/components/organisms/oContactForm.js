import React, { useState } from 'react'

import { Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'

import '../../static/scss/organisms/oContactForm.scss'

const OContactForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-soft-blue text-light shadow o-contactForm">
                <Row className="text-center">
                    <ATitle 
                        className="mb-4 bold"
                        heading_tag="h1"
                        text="Feel free to contact me now !"
                    />
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <FloatingLabel
                            controlId="inputName"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Enter your name" required/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} sm controlId="formGridEmail">
                        <FloatingLabel
                            controlId="inputEmail"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" required/>
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <FloatingLabel controlId="inquirySelect" label="Type of inquiry" required >
                            <Form.Select aria-label="Floating label select example" required >
                                <option value="1">Collaboration</option>
                                <option value="2">Business</option>
                                <option value="3">Other</option>
                            </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formGridAddress2">
                    <FloatingLabel controlId="messageInput" label="Add your message !">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                            required 
                        />
                    </FloatingLabel>
                </Form.Group>

                <Row>
                    <Button id="submitButton" className="zoom bold shadow" type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default OContactForm
