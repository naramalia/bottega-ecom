import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../formFields';


import history from '../../history';

class ReviewForm extends Component {
    render () {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className = {`${className} review-form`}>
                
                <div className='review-form__line'></div>
                <Field className='review-form__proceed' 
                onClick={() => history.push('/signIn')}
                type='submit'
                title='Proceed to Checkout'
                placeholder='proceed'
                name='proceed' 
                component={FormButton}/>
                <Field className='review-form__back' 
                onClick={() => history.push('/shop')}
                type='button'
                title='Back'
                placeholder='Back'
                name='back' 
                component={FormButton}
                short={true}
                />
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);


export default ReviewForm;

