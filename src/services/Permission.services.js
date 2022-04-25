import { PermissionsAndroid } from 'react-native';


function useCamera() {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Moniee',
          'message': 'Moniee would like to access your contacts.',
          'buttonPositive': 'ok',
          buttonNegative:'cancel'
        }
      )
}



function useContact() {
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Moniee',
          'message': 'Moniee would like to access your Camera.',
          'buttonPositive': 'ok',
          buttonNegative:'cancel'
        }
      )
}


export {useCamera,useContact}