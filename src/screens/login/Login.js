import {Text, TextInput, View, Dimensions,Alert} from 'react-native';
import React,{useState,useEffect} from 'react';
import { useSelector ,useDispatch} from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';

//style import
import styles from './Login.style';

//Local imports
import {Button, genStyle,Loader} from '../../component';

import { getUserFromDb,SaveContact } from '../../store/actions';



const getData = async (key) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      // console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};




  
  const Login = ({navigation}) => {

    
    const [ShowLoader, setShowLoader] = useState(false);

  const {width, height} = Dimensions.get('screen');
  const [User, setUser] = useState({})
  const [PhoneNumber, setPhoneNumber] = useState('');



  const dispatch = useDispatch(getUserFromDb(User))
 
 

  

  dispatch(getUserFromDb(User))

function ProccedNextScreen() {
  if (PhoneNumber === '') {
    Alert.alert('Warning', `Please enter your phone number to continue`, [
      {text: 'Cancel'},
    ]);
    return;
  }

  if (PhoneNumber.length < 10) {
    Alert.alert('Warning', `Please enter a valid number`, [{text: 'Cancel'}]);
    return;
  }





  setShowLoader(true);
  setTimeout(() => {
    setShowLoader(false)
    navigation.navigate('VerifyPin',PhoneNumber)
 

  }, 2000);
}




async function GetContactFromPhone() {
  Contacts.getAll().then(contacts => {
    dispatch(SaveContact(contacts))
  });
}


async function getUser() {
  await getData("userDetails")
  .then(data => data)
  .then(value => {
   setUser(value)
  })
  .catch(err => console.log(err)).finally(()=>{

   

  }
  )
  
}

useEffect(() => {
  getUser()
  GetContactFromPhone()
}, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text  style={styles.textHeader}>Login</Text>
        <Text  style={styles.textBody}>Enter your phone number</Text>

        <TextInput value={PhoneNumber} onChangeText={(number )=>setPhoneNumber(number)} style={styles.textInput} keyboardType="number-pad"  placeholder='Phone Number'/>
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Continue"
         onPress={ProccedNextScreen}

         />
      </View>
    {ShowLoader && <Loader  message='verify Number' />}
    </View>
  )
}

export default Login;

