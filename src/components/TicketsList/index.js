import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getTicketsListActions} from '../../actions'

// import Ticket from '../Ticket'

import './TicketList.css'

const TicketList =  ({ticketsList, getTicketsList}) => {
    useEffect(() => {
        getTicketsList();
    }, []);
    console.log(ticketsList);
    return <div className='ticket-list-container flexible-list'>
        {ticketsList.map((ticket => <div>{ticket}</div>))}
    </div>
};

const mapStateToProps = (state) => {
    return{
        ticketsList: state.ticketsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getTicketsList: () => {
            dispatch(getTicketsListActions.request());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);


