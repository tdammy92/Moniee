import { PermissionsAndroid,Platform } from 'react-native';
import {checkMultiple, requestMultiple,PERMISSIONS} from 'react-native-permissions';





function requestAllPermision() {

  if (Platform.OS === 'ios') {
    return
  } else {
    checkMultiple([PERMISSIONS.ANDROID.READ_CONTACTS, PERMISSIONS.ANDROID.CAMERA]).then((statuses) => {

      if (statuses[PERMISSIONS.ANDROID.READ_CONTACTS] === 'denied' && statuses[PERMISSIONS.ANDROID.CAMERA]=== 'denied') {
        console.log("all was denied");

        requestMultiple([PERMISSIONS.ANDROID.READ_CONTACTS, PERMISSIONS.ANDROID.CAMERA]).then((statuses) => {
          // console.log('Camera', statuses[PERMISSIONS.ANDROID.READ_CONTACTS]);
          // console.log('FaceID', statuses[PERMISSIONS.ANDROID.CAMERA]);
        })
      }
     
    });
  }
  
}
// function useCamera() {
// if (Platform.OS ==='ios') {
//   return
// }else{



// }



//   try {
//     PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//         {
//           'title': 'Moniee',
//           'message': 'Moniee would like to access your contacts.',
//           'buttonPositive': 'ok',
//           buttonNegative:'cancel'
//         }
//       )
    
//   } catch (error) {
//     console.log(error);
//   }
// }



// function useContact() {

//   try {
   
//     PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           'title': 'Moniee',
//           'message': 'Moniee would like to access your Camera.',
//           'buttonPositive': 'ok',
//           buttonNegative:'cancel'
//         }
//       )
//   } catch (error) {
//     console.log(error);
//   }
// }






export {requestAllPermision}