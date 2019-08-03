import React, { Component } from 'react';
import axios from 'axios';
import { SubmitButton } from "./Buttons";

const API_PATH = `${window.origin}/api/contact/index.php`;


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        error: false,
        inputErrors: {
            name: false,
            email: false,
            message: false
        }
    };

    validate(input, type) {
        let validation = null;

        switch (type) {
            case 'name':
                validation = input.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) ? false : true;
                break;
            case 'email':
                validation = input.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? false : true;
                break;
            default:
                validation = input.length > 0 ? false : true;
                break;
        }

        return validation;
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = this.state;

        const nameErr = this.validate(name, 'name');
        const emailErr = this.validate(email, 'email');
        const messageErr = this.validate(message, 'message');

        const canSubmit = !nameErr && !emailErr && !messageErr;

        if (canSubmit) {
            axios.post(`${API_PATH}`,
                { ...this.state },
                {
                    headers: { 'content-type': 'application/json' }
                })
                .then((resp) => this.setState({ sent: resp.data.sent }) )
                .catch(() => this.setState({ error: true }) );
        } else {
            this.setState({
               inputErrors: {
                   name: nameErr,
                   email: emailErr,
                   message: messageErr,
               }
            });
        }
    };

    render() {
        const { name, email, message, sent, error, inputErrors } = this.state;

        const errStyle = 'component-contact__form-input component-contact__form-input--error';

        const nameErrorStyle = inputErrors.name ? errStyle : 'component-contact__form-input';
        const emailErrorStyle = inputErrors.email ? errStyle : 'component-contact__form-input';
        const messageErrorStyle = inputErrors.message ? errStyle : 'component-contact__form-input';

        return (
            <section className="component-contact">
                <article className="padding">
                    <span className="component-contact__form-thankyou" hidden={!sent}>
                        Thankyou for contacting me, I'll get back to you as soon as possible!
                    </span>
                    <form action="#" className="component-contact__form-wrapper" hidden={sent}>
                        <input type="text" name="name" placeholder="Name"
                           className={nameErrorStyle}
                           value={name}
                           onChange={(e) => {
                               this.setState({
                                   name: e.target.value,
                                   inputErrors: {
                                       ...inputErrors,
                                       name: this.validate(e.target.value, 'name')
                                   }
                               })
                           }}
                        />
                        <input type="email" name="email" placeholder="E-mail"
                           className={emailErrorStyle}
                           value={email}
                           onChange={(e) => {
                               this.setState({
                                   email: e.target.value,
                                   inputErrors: {
                                       ...inputErrors,
                                       email: this.validate(e.target.value, 'email')
                                   }
                               })
                           }}
                        />
                        <textarea name="message" placeholder="Contact me for a free consultation!"
                              className={`${messageErrorStyle} component-contact__form-input--text-area`}
                              onChange={(e) => {
                                this.setState({
                                    message: e.target.value,
                                    inputErrors: {
                                        ...inputErrors,
                                        message: this.validate(e.target.value, 'message')
                                    }
                                })
                            }}
                            value={message}>
                        </textarea>
                        <SubmitButton onPress={(e) => this.handleFormSubmit(e)} value="Submit" disabled={sent} hidden={error}>Submit</SubmitButton>
                        <span className="component-contact__form-error component-contact__form-error--bottom" hidden={!error}>
                            Oops! Something went wrong.  Please email me @ <a href="mailto:sfgirvan@yahoo.com">sfgirvan@yahoo.com</a>.
                        </span>
                    </form>
                </article>
            </section>
        );
    }
};

export default Contact;


