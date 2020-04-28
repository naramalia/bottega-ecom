import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail (_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                __id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                __id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            },

        ]
    })
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 10.02,
                orderNumber: 'A0048248347',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 5.90,
                orderNumber: 'A0048248350',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 19.00,
                orderNumber: 'A0048248352',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '4321 West State Street'
                }
            },
            {
                _id: 4,
                total: 9.49,
                orderNumber: 'A0048248362',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 1.40,
                orderNumber: 'A0048248341',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 11.50,
                orderNumber: 'A0048248340',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 17.70,
                orderNumber: 'A0048248349',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            
        ]
    })
}