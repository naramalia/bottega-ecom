import React, { Component } from 'react';

import SignUpForm from './signUpForm';
import PageTitle from '../pagetitle';

import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
    
    onSubmit = (fields) => {
        console.log(fields);
    }
    
    render () {
        return (
            <div className = 'sign-up'>
                <PageTitle className='sign-up__page-title'/>
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form'/>
            </div>
        )
    }
}


export default SignUp;