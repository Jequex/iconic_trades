import React, { useReducer } from 'react';
import subReducer from './subReducer';
import SubContext from './subContext';
import { endPoints } from "../../utils/urls";
import axios from 'axios'
import { 
    GET_SUBSCRIPTIONS,
    SUBSCRIPTION_ERROR,
    VERIFY_PAYMENT,
    PAYMENT_ERROR
} from '../types';

const SubState = props => {
    const initialState = {
        subscriptions: [],
        error: null
    }

    
    const { userSubscriptionsUrl, verifyPaymentUrl } = endPoints;

    const [state, dispatch] = useReducer(subReducer, initialState);

    //user subscriptions
    const getSubscriptions = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.get(userSubscriptionsUrl, config);
            dispatch({
                type: GET_SUBSCRIPTIONS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: SUBSCRIPTION_ERROR,
                payload: err.response.data
            })
        }
    }

    //verify payment
    const verifyPayment = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(verifyPaymentUrl, formData, config);
            dispatch({
                type: VERIFY_PAYMENT,
                payload: res.data
            });

            getSubscriptions();

        } catch (err) {
            dispatch({
                type: PAYMENT_ERROR,
                payload: err.response.data
            })
        }
    }

    return (
        <SubContext.Provider
            value={{
                subscriptions: state.subscriptions,
                getSubscriptions,
                verifyPayment
            }}
        >
            {props.children}
        </SubContext.Provider>
    )
}

export default SubState;