import * as actionType from './constant'



function SigUpUser(newUser) {
    
return {
    type:actionType.ADD_USER,
    payload:newUser
}


}
function getUserFromDb(user) {
    
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


export {SigUpUser,LoginUser,getUserFromDb,LogoutUser,SaveContact,SelectedContact,ClearSelectedContact}