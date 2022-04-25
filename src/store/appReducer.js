import {combineReducers} from 'redux';
import {getData, storeData, removeData} from '../services';

import * as actionTypes from './constant';

// async function getUser() {
//     let ls = null
//    await getData("userDetails").then(data=>data).then(value=> ls = value);

// 	return ls;
// }

const initialState = {
  User: null,
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
  balance: 120000,
  sendRequest: {},
  sendFund: {},
};

function TransactionReducer(state = transaction, {type, payload}) {
  switch (type) {
    case actionTypes.SEND_FUNDS:
      return {};

    default:
      return state;
  }
}
const InitContact = {
Contact:[],
Selected:[]
}


function ContactReducer(state = InitContact, {type, payload}) {

    // console.log(type,payload)
  switch (type) {
    case actionTypes.SAVE_CONTACTS:
      return {
          ...state,Contact:payload
      };

      case actionTypes.SELECTED_CONTACTS:

          return {
              ...state,Selected:payload
          }

      case actionTypes.CLEAR_SELECTED_CONTACTS:

          return {
              ...state,Selected:[]
          }

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
