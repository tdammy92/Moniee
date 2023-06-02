import * as actionType from './constant'



function SigUpUser(newUser) {
    
return {
    type:actionType.ADD_USER,
    payload:newUser
}


}
function AddUserFromDb(user) {
    
return {
    type:actionType.ADD_USER_DB,
    payload:user
}
}


function LoginUser() {
    
return {
    type:actionType.LOGIN_USER,

}
}

function LogoutUser() {
    
    return {
    type:actionType.LOGOUT_USER,
   
    }
    
}


function SaveContact(contact) {
    return {
        type:actionType.SAVE_CONTACTS,
        payload:contact
    }
}


function SelectedContact(contact) {
    return {
        type:actionType.SELECTED_CONTACTS,
        payload:contact
    }
}
function ClearSelectedContact() {
    return {
        type:actionType.CLEAR_SELECTED_CONTACTS,
       
    }
}




function requestFund(amount) {

  
    return {
        type:actionType.REQUEST_FUNDS,
        payload:amount
    }
}


function sendFund(amount) {
    return {
        type:actionType.SEND_FUNDS,
        payload:amount
    }
}


export {SigUpUser,LoginUser,AddUserFromDb,LogoutUser,SaveContact,SelectedContact,ClearSelectedContact,requestFund,
    sendFund}