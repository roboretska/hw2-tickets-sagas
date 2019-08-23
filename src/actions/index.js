import {createRoutineCreator} from 'redux-saga-routines';

const customRoutineCreator = createRoutineCreator(['REQUEST', 'SUCCESS', 'FAILURE']);

console.log(customRoutineCreator.STAGES);
const getTicketsListActions = customRoutineCreator('GET_TICKETS_LIST');
const getCurtActions = customRoutineCreator('GET_CURT');

export {
    getTicketsListActions,
    getCurtActions
}