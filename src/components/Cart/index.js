import React, {useContext, useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Ticket from '../Ticket'

import './Cart.css'

const CartList =  ({cartList}) => {
    console.log({cartList})
    return <div className='cart-container  flexible-list'>
        {/*{ticketsList.map((ticket) =>*/}
            {/*<Ticket*/}
                {/*key={`${ticket.id}cart`}*/}
                {/*ticket={ticket}*/}
                {/*onClickEvent={() => removeFromCart(ticket)}*/}
                {/*fromList={false}*/}
            {/*/>)}*/}
            AAAAAAAAAa
    </div>
};

const mapStateToProps = (state) =>{
    return {
        cartList: state.cartList
    }
};

export default connect(mapStateToProps)(CartList);