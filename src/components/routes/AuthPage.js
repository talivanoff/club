import React, { Component } from 'react'
import SingInForm from '../auth/SignInForm'

class AuthPage extends Component {
    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <SingInForm />
            </div>
        )
    }
}

export default AuthPage;
