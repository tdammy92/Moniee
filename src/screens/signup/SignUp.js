import {
  Text,
  TextInput,
  View,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useSelector ,useDispatch} from "react-redux";

//style import
import styles from './signup.style';

//Local imports
import {Button, Loader, genStyle} from '../../component';
import {useCamera, useContact} from '../../services';

const SignUp = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');



  const [PhoneNumber, setPhoneNumber] = useState('');

  const [ShowLoader, setShowLoader] = useState(false);

 

  //function to proceed to otp screen
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

    //this timeout is simulating APi call
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false)
      navigation.navigate('Verify', PhoneNumber);
    }, 2000);
  }





  // useEffect(() => {
  //  //casking user permision for contact and camera useage
  // useCamera();
  // useContact();
  // }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>Let’s begin</Text>
        <Text style={styles.textBody}>
          Welcome to moniee payment app , please kindle enter your number to register.
        </Text>

        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="Phone Number"
          value={PhoneNumber}
          onChangeText={number => setPhoneNumber(number)}
        />
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Get Started" onPress={ProccedNextScreen} />
      </View>
      {ShowLoader && <Loader message="Verifing number" />}
    </View>
  );
};

export default SignUp;
