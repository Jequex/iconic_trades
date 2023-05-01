import {
    GET_SUBSCRIPTIONS,
    SUBSCRIPTION_ERROR,
    VERIFY_PAYMENT,
    PAYMENT_ERROR
} from '../types';

const subReducer = (state, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.payload
            }
        case SUBSCRIPTION_ERROR:
        console.log(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case VERIFY_PAYMENT:
        case PAYMENT_ERROR:
        default:
            return state
    }
}

export default subReducer;