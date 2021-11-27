import React, { useState } from 'react'

import { Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'

import '../../static/scss/organisms/oContactForm.scss'

const OContactForm = ({ dico }) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const {
        FORM_TITLE,
        FORM_INPUT_NAME,
        FORM_INPUT_EMAIL,
        FORM_INPUT_SELECT,
        FORM_SELECT_OPTION_1,
        FORM_SELECT_OPTION_2,
        FORM_SELECT_OPTION_3,
        FORM_INPUT_MESSAGE,
        FORM_BUTTON,
    } = dico

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-soft-blue text-light shadow o-contactForm">
                <Row className="text-center">
                    <ATitle 
                        className="mb-4 bold"
                        heading_tag="h1"
                        text={FORM_TITLE}
                    />
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <FloatingLabel
                            controlId="inputName"
                            label={FORM_INPUT_NAME}
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Enter your name" required/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} sm controlId="formGridEmail">
                        <FloatingLabel
                            controlId="inputEmail"
                            label={FORM_INPUT_EMAIL}
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" required/>
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <FloatingLabel controlId="inquirySelect" label={FORM_INPUT_SELECT} required >
                            <Form.Select aria-label="Floating label select example" required >
                                <option value="1">{FORM_SELECT_OPTION_1}</option>
                                <option value="2">{FORM_SELECT_OPTION_2}</option>
                                <option value="3">{FORM_SELECT_OPTION_3}</option>
                            </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formGridAddress2">
                    <FloatingLabel controlId="messageInput" label={FORM_INPUT_MESSAGE}>
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
                        {FORM_BUTTON}
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default OContactForm
