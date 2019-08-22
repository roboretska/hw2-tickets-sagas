import React, {useContext, useState, useEffect} from 'react';
import {connect} from 'react-redux'

import Ticket from '../Ticket'

import './TicketList.css'

const TicketList =  ({ticketsList}) => {
    console.log(ticketsList);
    return <div className='ticket-list-container flexible-list'>
        Hiiiiiiiii
    </div>
};

const mapStateToProps = (state) => {
    return{
        ticketsList: state.ticketsList
    }
};

export default connect(mapStateToProps)(TicketList);


