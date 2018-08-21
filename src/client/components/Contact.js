import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component{
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  validateForm() {
      let fields = this.state.fields;
      let errors = {};
      var formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your username.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email.";
        }
      };

      this.setState({
        errors: errors
      });
      return formIsValid;
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.validateForm()) {
        //reset the fields
        let fields = {};
        fields["name"] = "";
        fields["email"] = "";
        this.setState({fields:fields});

        //send the message through nodemailer
        const FormData = {
          Name: document.getElementById('name').value,
          Email:document.getElementById('email').value,
          Message:document.getElementById('message').value
        };

        axios.post(
          '/api/send',
          FormData
        )
          .then((response)=>{
            if (response.data.msg === 'success'){
              console.log(FormData);
              alert("Message Sent.");
              this.resetForm()
            }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
            }
        })
      }
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

  render(){
    return(
      <div className="container contact">
        <header className="contact-header">
          <div className="columns is-mobile is-centered">
            <a className="column is-narrow contact-header__text has-text-black"  href="/">
              <p className="is-size-6 has-text-centered">HOME</p>
            </a>
          </div>
        </header>
        <hr/>
        <section className="thx-msg">
          <div className="container">
            <p className="title is-size-1-tablet is-size-3-mobile has-text-centered">
              Thank you for reaching out.
            </p>
          </div>
        </section>
        <div className="columns is-mobile">
          <div className="column is-10-mobile is-offset-1-mobile is-three-fifths-tablet is-offset-one-fifth-tablet">
            <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" action="http://localhost:4000/api/send">
              <div className="field">
                <label className="label">Name</label>
                <p className="control  has-icons-left">
                  <input className="input is-medium is-radiusless" name="name" onChange={this.handleChange} id="name" type="text" placeholder="e.g. Alex Smith" />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </p>
                <div className="errorMsg">{this.state.errors.name}</div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <p className="control  has-icons-left">
                  <input className="input is-medium is-radiusless" name="email"  onChange={this.handleChange}  id="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </p>
                <div className="errorMsg">{this.state.errors.email}</div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control" >
                  <textarea className="textarea is-medium is-radiusless" id="message" placeholder="Textarea" rows="10"></textarea>
                </div>
              </div>
              <button className="button is-medium  is-info is-outlined" type="submit">Send</button>
              <a className="button is-medium  is-danger is-outlined" type="reset" onClick={this.resetForm.bind(this)}>Reset</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
