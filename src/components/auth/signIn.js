import React, { Component } from 'react';

import SignInForm from './signInForm';
import PageTitle from '../pagetitle';

import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
    
    onSubmit = (fields) => {
        console.log(fields);
    }
    
    render () {
        return (
            <div className = 'sign-in'>
                <PageTitle className='sign-in__page-title'/>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}


export default SignIn;