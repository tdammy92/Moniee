import React,{ useState } from 'react';
import {combineReducers} from 'redux';
import {getData, storeData, removeData} from '../services';

import * as actionTypes from './constant';




async function getUser() {
  let user = null;

 await getData("userDetails")
  .then(data => data)
  .then(value => {

  user = value

}).catch((error)=>console.log(error))


// console.log('from Rdeucer',user);
return  user;
 
}


const initialState = {
  User: getUser(),
  IsLoggedIn: false,
};

function UserReducer(state = initialState, {type, payload}) {
  // console.log(type,payload);
  switch (type) {
    case actionTypes.ADD_USER_DB:
      return {
        ...state,
        User: payload,
      };
    case actionTypes.ADD_USER:
      storeData('userDetails', payload);
      return {
        ...state,
        User: payload,
      };

    case actionTypes.LOGIN_USER:
      return {
        ...state,
        IsLoggedIn: true,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        IsLoggedIn: false,
      };

    default:
      return state;
  }
}

const transaction = {
  balance: 150000,
  sendRequest: {},
  sendFund: {},
};

function TransactionReducer(state = transaction, {type, payload}) {

  // console.log(type,payload);
  switch (type) {
    case actionTypes.SEND_FUNDS:
    // console.log("sendFund", payload)
    return {...state,balance:state.balance-payload};
    
    case actionTypes.REQUEST_FUNDS:
        // console.log("requestFund", payload)
        return {...state,balance:state.balance+payload};
    default:
      return state;
  }
}
const InitContact = {
  Contact: [],
  Selected: [],
};

function ContactReducer(state = InitContact, {type, payload}) {
  // console.log(type,payload)
  switch (type) {
    case actionTypes.SAVE_CONTACTS:
      return {
        ...state,
        Contact: payload,
      };

    case actionTypes.SELECTED_CONTACTS:
      return {
        ...state,
        Selected: payload,
      };

    case actionTypes.CLEAR_SELECTED_CONTACTS:
      return {
        ...state,
        Selected: [],
      };

    default:
      return state;
  }
}

const rootReducers = combineReducers({
  UserReducer,
  TransactionReducer,
  ContactReducer,
});

export default rootReducers;
