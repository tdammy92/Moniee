import React, {useState} from 'react';
import {View, Text, TextInput,Alert} from 'react-native';
import { useSelector ,useDispatch} from "react-redux";

//Local imports
import styles from './Pin.style';
import {Heading, Button,Loader} from '../../component';
import {SigUpUser} from '../../store/actions'

const Pin = ({navigation,route}) => {

  const userDetails = route.params;


  const [ShowLoader, setShowLoader] = useState(false);
  const [verifyPin, setverifyPin] = useState(false);

  const [Pin, setPin] = useState('');
  const [ConfirmPin, setConfirmPin] = useState('');


  const dispatch = useDispatch()


  function SaveUser() {

    if (Pin!==ConfirmPin) {
      Alert.alert('Warning', `Pin does not match`, [
        {text: 'Cancel'},
      ]);
      return;
    }
    

     //this timeout is simulating APi call
     setShowLoader(true);
     setTimeout(() => {
       setShowLoader(false)
     
    
    dispatch(SigUpUser({...userDetails,Pin}))
      navigation.navigate('Login')
     }, 2000);

  }


  return (
    <View style={styles.container}>
      <Heading navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.textHeader}>
          {verifyPin ? 'Confirm PIN' : 'Set PIN'}
        </Text>
        <Text style={styles.textBody}>
          Facilisis mauris, potenti vitae cras risus.
        </Text>

        {/* view for pin boxes */}
  {  !verifyPin &&  <View style={styles.textInputWrapper}>
        <TextInput
        value={Pin}
          style={styles.pinInput}
          keyboardType="number-pad"
          secureTextEntry
          onChangeText={(pin)=>setPin(pin)}
        />
      </View>}
       
       {verifyPin && <View style={styles.textInputWrapper}>
          <TextInput
          value={ConfirmPin}
            style={styles.pinInput}
            keyboardType="number-pad"
            secureTextEntry
            onChangeText={(pin)=>setConfirmPin(pin)}
          />
        </View>}
      
      </View>

      <View style={styles.btnWrapper}>
        <Button
          btnText={verifyPin ? 'Save' : 'Confirm'}
          onPress={verifyPin ? SaveUser : ()=>setverifyPin(true)}
        />
      </View>

      {ShowLoader&&  <Loader message='Creating your account'/>}
    </View>
  );
};

export default Pin;
