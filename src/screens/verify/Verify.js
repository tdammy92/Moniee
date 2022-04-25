import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View,Alert} from 'react-native';
import CountDown from 'react-native-countdown-component';

//import styles
import styles from './Verify.style';
//Local imports
import {Button, genStyle,Heading,Loader} from '../../component';
import { RFValue } from 'react-native-responsive-fontsize';

const Verify = ({navigation,route}) => {

const PhoneNumber = route.params


const [ShowLoader, setShowLoader] = useState(false);





  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

const [pin1, setpin1] = useState("")
const [pin2, setpin2] = useState("")
const [pin3, setpin3] = useState("")
const [pin4, setpin4] = useState("")






  function ProccedNextScreen() {
    if (pinValue === '') {
      Alert.alert('Warning', `Please enter your OTP  to continue`, [
        {text: 'Cancel'},
      ]);
      return;
    }



    //this timeout is simulating APi call
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false)
    
      navigation.navigate('BankDetails',PhoneNumber)
    }, 2000);
  }


  useEffect(() => {
  

    return () => {

      // clearTimeout(timer)
      window.removeEventListener()
    }
  }, [])


  
  return (
    <View style={styles.container}>
    <Heading navigation={navigation}/>
      <View style={styles.content}>
        <Text style={styles.textHeader}>Verification</Text>
        <Text style={styles.textBody}>
          Lacus integer imperdiet lacinia consectetur erat scelerisque.
        </Text>

        {/* view for pin boxes */}
        <View style={styles.pinInputWrapper}>
          <TextInput
            ref={pin1Ref}
          value={pin1}
            style={styles.pinInput}
            maxLength={1}
            keyboardType="number-pad"
            onChange={(Pin1) => {
            setpin1(Pin1)
              if (pin1 != "") {
                pin2Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin2Ref}
            value={pin2}
            style={styles.pinInput}
            maxLength={1}
            keyboardType="number-pad"
            onChange={(Pin2) => {
              setpin2(Pin2)
              if (pin2 != "") {
                pin3Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin3Ref}
            value={pin3}
            style={styles.pinInput}
            maxLength={1}
            keyboardType="number-pad"
            onChange={(Pin3) => {
              setpin3(Pin3)
              if (pin3 != "") {
                pin4Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin4Ref}
            value={pin4}
            style={styles.pinInput}
            maxLength={1}
            keyboardType="number-pad"
            onChange={(Pin4) => {
              setpin4(Pin4)
              
            }}
          />
        </View>

        {/* <View style={styles.timerWrapper}>
          <Text  style={styles.timerText}>Verification code will be resent in</Text>
          <Text style={styles.timerTextValue}> {TimerValue}</Text>
        </View> */}
        <View style={styles.timerWrapper}>
        <CountDown
        until={1 * 10 + 60}
        size={30}
        // onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: 'black',fontSize:RFValue(18), 
        fontFamily:genStyle.txt.fontHeader}}
        timeLabelStyle={{color: 'black', fontSize:RFValue(18)}}
        timeToShow={['M', 'S']}
        showSeparator
        // timeLabels={{m: 'MM', s: 'SS'}}
      />
        </View> 
      </View>

      <View style={styles.btnWrapper}>
        <Button
          btnText="Submit"
          onPress={ProccedNextScreen}
        />
      </View>

    {ShowLoader&&  <Loader message='Verifing OTP'/>}
    </View>
  );
};

export default Verify;
