import {Text, TextInput, View, Dimensions,Alert} from 'react-native';
import React,{useState,useEffect} from 'react';
import { useSelector ,useDispatch} from "react-redux";



//style import
import styles from './Login.style';

//Local imports
import {Button, genStyle,Loader} from '../../component';
import {getData}  from '../../services'




  
  const Login = ({navigation}) => {

    
    const [ShowLoader, setShowLoader] = useState(false);

  const {width, height} = Dimensions.get('screen');
  const [User, setUser] = useState({})
  const [PhoneNumber, setPhoneNumber] = useState('');




  // const user = useSelector( (state) =>state.UserReducer.User);
  // const Usr = JSON.parse(User)
 
// console.log("userFromLogin", Usr);
// console.log("userFromLogin", user);


function ProccedNextScreen() {
  
  
  if (PhoneNumber === '') {
    Alert.alert('Warning', `Please enter phone number to continue`, [
      {text: 'Cancel'},
    ]);
    return;
  }


  
  if (PhoneNumber.length < 10) {
    Alert.alert('Warning', `Please enter a valid number`, [{text: 'Cancel'}]);
    return;
  }


  if (PhoneNumber !== User.Phone) {
    Alert.alert('Warning', `Please enter your phone number to continue`, [
      {text: 'Cancel'},
    ]);
    return;
  }



  setShowLoader(true);
  setTimeout(() => {
    setShowLoader(false)
    navigation.navigate('VerifyPin',PhoneNumber)
 

  }, 2000);
}





async function getUserFromDb() {
  await getData("userDetails")
  .then(data => data)
  .then(value => {
   setUser(value)
  })
  .catch(err => console.log(err))
}


useEffect(() => {

  const unsubscribe = navigation.addListener('focus', () => {
    // do something
   getUserFromDb()
    // dispatch(SelectedContact(selectedContact))
  });

  return unsubscribe;
  
  

}, [navigation])

 
// console.log("userFromLogin", User);


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

