import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

//import styles
import styles from './Verify.style';
//Local imports
import {Button, genStyle, Heading, Loader} from '../../component';
import {RFValue} from 'react-native-responsive-fontsize';

const Verify = ({navigation, route}) => {
  const PhoneNumber = route.params;

  const [ShowLoader, setShowLoader] = useState(false);
  const [Timer, setTimer] = useState(60);
  const [TimeUp, setTimeUp] = useState(false);

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pinValue, setpinValue] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
  });

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
      setShowLoader(false);

      navigation.navigate('BankDetails', PhoneNumber);
    }, 2000);
  }

  useEffect(() => {
    let timer = null;

    if (Timer >= 1) {
      timer = setInterval(() => {
        setTimer(prev => (prev -= 1));
      }, 1000);
    } else if (Timer === 0) {
      setTimeUp(true);
      clearInterval(timer);

      return;
    }

    return () => {
      clearInterval(timer);
    };
  }, [Timer]);

  return (
    <View style={styles.container}>
      <Heading navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.textHeader}>Verification</Text>
        <Text style={styles.textBody}>
          Verification OTP has been sent to{' '}
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {PhoneNumber}
          </Text>
        </Text>

        {/* view for pin boxes */}
        <View style={styles.pinInputWrapper}>
          <View style={styles.pinInput}>
            <TextInput
              ref={pin1Ref}
              // value={pinValue.pin1}
              style={styles.pinTxtInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={Pin1 => {
                setpinValue({...pinValue, pin1: Pin1});

                Pin1 && pin2Ref.current.focus();
              }}
            />
          </View>
          <View style={styles.pinInput}>
            <TextInput
              ref={pin2Ref}
              // value={pinValue.pin2}
              style={styles.pinTxtInput}
              maxLength={1}
              keyboardType="number-pad"
              onChange={Pin2 => {
                setpinValue({...pinValue, pin2: Pin2});

                Pin2 ? pin3Ref.current.focus() : pin1Ref.current.focus();
              }}
            />
          </View>

          <View style={styles.pinInput}>
            <TextInput
              ref={pin3Ref}
              // value={pinValue.pin3}
              style={styles.pinTxtInput}
              maxLength={1}
              keyboardType="number-pad"
              onChange={Pin3 => {
                setpinValue({...pinValue, pin3: Pin3});

                Pin3 ? pin4Ref.current.focus() : pin2Ref.current.focus();
              }}
            />
          </View>
          <View style={styles.pinInput}>
            <TextInput
              ref={pin4Ref}
              // value={pinValue.pin4}
              style={styles.pinTxtInput}
              maxLength={1}
              keyboardType="number-pad"
              onChange={Pin4 => {
                setpinValue({...pinValue, pin4: Pin4});

                !Pin4 && pin3Ref.current.focus();
              }}
            />
          </View>
        </View>

        <View style={styles.timerWrapper}>
          {!TimeUp && (
            <Text style={styles.timerText}>
              Verification code will expire in{' '}
              <Text style={styles.timerTextValue}>
                {Timer < 10 ? '0' : null}
                {Timer} seconds
              </Text>
            </Text>
          )}

          {TimeUp && (
            <TouchableOpacity
              style={styles.resendBtnContainer}
              onPress={()=>{
                setTimer(60)
                setTimeUp(false)
                }}>
              <Text style={styles.resendBtnTxt}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.timerWrapper}></View>
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Submit" onPress={ProccedNextScreen} />
      </View>

      {ShowLoader && <Loader message="Verifing OTP" />}
    </View>
  );
};

export default Verify;
