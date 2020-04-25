import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>
        </div>
    )
}

function CartContent({className}) {
    let count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
            
            </div>
            <div className='cart-content__footer'>

            </div>
        </div>
    )
}

class ShopCart extends Component {
    render () {
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
                <CartContent className='shop-cart__content' products={[234, 434, 576]}/>
            </div>
        )
    }
}