import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {
    
    componentDidMount() {
        //set the header links
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signIn'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        //fetch shop products action creator
        this.props.fetchShopProducts();
            //filter products with links

    }

    render() {
        return (
            <div className='shop'>
                {/* shop search bar
                shop product
                shop cart button */}
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {state}
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;