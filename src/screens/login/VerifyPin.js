import {Text, TextInput, View, Dimensions, Alert} from 'react-native';
import React, {useState,useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//style import
import styles from './VerifyPin.style';

//Local imports
import {Button, genStyle, Loader} from '../../component';
import { LoginUser,AddUserFromDb} from '../../store/actions';

import { getData } from '../../services';

const VerifyPin = ({navigation, route}) => {
  // const PhoneNumber = route.params;

  const [ShowLoader, setShowLoader] = useState(false);
  const [pin, setPin] = useState('');
  const [User, setUser] = useState({})
  const pinRef = useRef(null)

  // const {width, height} = Dimensions.get('screen');

  const dispatch = useDispatch();

  const res = useSelector(state => state.UserReducer.User);

  const {Phone, Pin} = res;

  // console.log(Phone,Pin);

  function handleLogin() {


    
    
    setShowLoader(true);
    if ( pin != User.Pin) {
      setTimeout(() => {
        
        setShowLoader(false);
        Alert.alert('Warning', `Incorrect password`, [
          {text: 'Cancel'},
        ]);
      }, 2000);

      return;
    }

    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      // navigation.navigate('VerifyPin',PhoneNumber)
dispatch(LoginUser)
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }, 2000);
  }





  async function getUserFromDB() {
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
      dispatch(AddUserFromDb(User))
     getUserFromDB()

     pinRef.current.focus()
    
    });
  
    return unsubscribe;
    
    
  
  }, [navigation])





  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>Welcome back</Text>
        <Text style={styles.textBody}>Enter your PIN to continue</Text>

        {/* view for pin boxes */}
        <View style={styles.textInputWrapper}>
          <TextInput
          ref={pinRef}
            maxLength={4}
            style={styles.pinInput}
            keyboardType="number-pad"
            value={pin}
            secureTextEntry
            onChangeText={pin => setPin(pin)}
          />
        </View>
      </View>
      <Text style={styles.textForgetPin}>Forgot PIN?</Text>

      <View style={styles.btnWrapper}>
        <Button btnText="Login" onPress={handleLogin} />
      </View>
      {ShowLoader && <Loader message="Verifing OTP" />}
    </View>
  );
};

export default VerifyPin;
