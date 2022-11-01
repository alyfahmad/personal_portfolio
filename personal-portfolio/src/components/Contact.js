import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const form = useRef();

    const forminitialDetails = {
        firstName: '',
        LastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const notifySucess = () => {
        toast.success("Message sent successfully", {  
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"});
    }

    const notifyError = () => {
        toast.error("Something went wrong. Please try again later or contact me through email", {  
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"});
    }

    const [formDetails, setFormDetails] = useState(forminitialDetails);
    const [buttonText, setButtonText] = useState('Send');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm('service_uw8k12k', 'template_mnxnkxf', form.current, 'aXUB_VKCdHJ8fkNza')
        .then((result) => {
            notifySucess();
            setButtonText('Send...');
            e.target.reset();
        }, (error) => {
            notifyError();
            setButtonText('Send...');
        });
    }

    return (
        <section className="contact" id="connect">
            <ToastContainer />
            <Container>
                <TrackVisibility partialVisibility>
                {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__zoomIn" : "" }>    
                        <Row className="align-items-center">
                            <Col md={6}>
                                <img src={contactImg} alt="Contact Me"/>
                            </Col>
                            <Col md={6}>
                                <h2>Get in Touch</h2>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name *" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name *" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="email" name="email" value={formDetails.email} placeholder="Email Address *" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                        </Col>
                                        <Col>
                                            <textarea name="message" row="6" value={formDetails.message} placeholder="Message *" onChange={(e) => onFormUpdate('message', e.target.value)} required/><br/>
                                            <button type="submit"><span>{buttonText}</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                }
                </TrackVisibility>
            </Container>
        </section>
    )
}