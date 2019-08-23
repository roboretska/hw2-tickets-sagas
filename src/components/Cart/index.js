import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getCurtActions} from '../../actions'
// import Ticket from '../Ticket'

import './Cart.css'

const CartList =  ({cartList, getCart}) => {
    useEffect(()=> {
        getCart();
    }, []);
    return <div className='cart-container  flexible-list'>
        {cartList.map((ticket) => <div>{ticket}</div>)}
    </div>
};

const mapStateToProps = (state) => {
    return {
        cartList: state.cartList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCart: () => dispatch(getCurtActions.request())
}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);