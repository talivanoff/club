import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'

const validate = ({email, password}) => {
    const errors = {};

    if (!email) {
        errors.email = 'email is required';
    } else if (!emailValidator.validate(email)) {
        errors.email = 'invalid email';
    }

    if (!password) {
        errors.password = 'password is required';
    } else if (password.length < 5) {
        errors.password = 'invalid password';
    }

    return errors
};

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <div>
                        <label>Email</label>
                        <Field name="email" component="input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm);
