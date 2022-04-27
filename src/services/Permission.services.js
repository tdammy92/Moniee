import { PermissionsAndroid } from 'react-native';


function useCamera() {


  try {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Moniee',
          'message': 'Moniee would like to access your contacts.',
          'buttonPositive': 'ok',
          buttonNegative:'cancel'
        }
      )
    
  } catch (error) {
    console.log(error);
  }
}



function useContact() {

  try {
   
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Moniee',
          'message': 'Moniee would like to access your Camera.',
          'buttonPositive': 'ok',
          buttonNegative:'cancel'
        }
      )
  } catch (error) {
    console.log(error);
  }
}


export {useCamera,useContact}