import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';


class ReviewForm extends Component {
    render () {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className = {`${className} review-form`}>
                <div className='review-form__legend'>
                    <div className='review-form__legend__name'>Name</div>
                    <div className='review-form__legend__quantity'>Quantity</div>
                    <div className='review-form__legend__price'>Price</div>
                </div>
                <ReviewProducts className='review-form__products' />
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

