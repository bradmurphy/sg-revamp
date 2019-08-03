import React, { Component } from 'react';
import axios from 'axios';
const API_PATH = `${window.origin}/api/contact/index.php`;
console.log(API_PATH);

class Contact extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        message: ''
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_PATH}`, { ...this.state },{
            headers: { 'content-type': 'application/json' }
        })
            .then(resp => {
                console.log(resp);
                this.setState({
                    mailSent: resp.data.sent
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err.message })
            });
    };

    render() {
        return (
            <section className="component-contact">
                <article className="padding">
                    <h1 className="typography__headline typography__headline--light">Contact</h1>
                    <form action="#" >
                        <input type="text" name="fname" placeholder="First Name"
                               value={this.state.fname}
                               onChange={e => this.setState({ fname: e.target.value })}
                        />
                        <input type="text" name="lname" placeholder="Last Name"
                               value={this.state.lname}
                               onChange={e => this.setState({ lname: e.target.value })}
                        />
                        <input type="email" name="email" placeholder="E-mail"
                               value={this.state.email}
                               onChange={e => this.setState({ email: e.target.value })}
                        />
                        <textarea name="message"
                              placeholder="Have a question?  Feel free to ask here."
                              onChange={e => this.setState({ message: e.target.value })}
                              value={this.state.message}>
                        </textarea>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    </form>
                </article>
            </section>
        );
    }
};

export default Contact;


