import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendEmail } from '../../redux/actions/appActions'

import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'
import Loader from '../atomes/aLoader'

import '../../static/scss/organisms/oContactForm.scss'

const OContactForm = ({ dico }) => {

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
        MODAL_HEAD,
        MODAL_RESPONSE,
        MODAL_MESSAGE,
        MODAL_BUTTON
    } = dico

    const dispatch = useDispatch()

    const myApp = useSelector(state => state.myApp)
    const {
        handle_loading,
        handle_error,
    } = myApp

    const form = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [inquiry, setInquiry] = useState(FORM_SELECT_OPTION_1)
    const [message, setMessage] = useState('')

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        } else if (form.checkValidity() === true) {
            console.log(name);
            console.log(email);
            console.log(inquiry);
            console.log(message);
            handleShow();
            dispatch(sendEmail(name, inquiry, message))
        }
        setValidated(true);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="contact-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{MODAL_HEAD}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {
                        handle_loading ?
                            <Loader />
                        : handle_error ?
                            <div>
                                <span style={{ color: 'red' }}>
                                    <i class="far fa-check-circle fa-5x"></i>
                                </span>
                                <h3>{handle_error}</h3>
                            </div>
                        :
                            <div>
                                <span style={{ color: 'lightgreen' }}>
                                    <i class="far fa-check-circle fa-5x"></i>
                                </span>
                                <h3>{MODAL_RESPONSE}</h3>
                                <p>{MODAL_MESSAGE}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button id="closeButton" variant="secondary" onClick={handleClose}>
                        {MODAL_BUTTON}
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit} className="bg-soft-blue text-light shadow o-contactForm">
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
                            <Form.Control 
                                type="text"
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name" 
                                required
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} sm controlId="formGridEmail">
                        <FloatingLabel
                            controlId="inputEmail"
                            label={FORM_INPUT_EMAIL}
                            className="mb-3"
                        >
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com" 
                                required
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridInquiry">
                    <FloatingLabel controlId="inquirySelect" label={FORM_INPUT_SELECT}>
                            <Form.Control  
                                as="select"
                                value={inquiry} 
                                onChange={(e) => setInquiry(e.target.value)}
                                required
                            >
                                <option value={FORM_SELECT_OPTION_1}>{FORM_SELECT_OPTION_1}</option>
                                <option value={FORM_SELECT_OPTION_2}>{FORM_SELECT_OPTION_2}</option>
                                <option value={FORM_SELECT_OPTION_3}>{FORM_SELECT_OPTION_3}</option>
                            </Form.Control>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formGridAddress2">
                    <FloatingLabel controlId="messageInput" label={FORM_INPUT_MESSAGE}>
                        <Form.Control
                            as="textarea"
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}
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
