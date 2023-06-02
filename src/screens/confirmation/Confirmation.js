import {Text, TextInput, View, Dimensions, Alert,StyleSheet} from 'react-native';
import React, {useState,useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import CurrencyFormat from 'react-currency-format';
//style import
// import styles from './VerifyPin.style';

//Local imports
import {Button, genStyle, Loader} from '../../component';
import { LoginUser } from '../../store/actions';
import { getData } from '../../services';

const Confirmation = ({navigation, route}) => {


 
  const {transactionDetails,destination} = route.params;
const [User, setUser] = useState({})
  const [ShowLoader, setShowLoader] = useState(false);
  const [pin, setPin] = useState('');

  const pinRef = useRef(null)



  const dispatch = useDispatch();

  // const res = useSelector(state => state.UserReducer.User);



  

  function ProcessTransaction() {
    if (pin != User.Pin) {
      
        Alert.alert('Warning', `Incorrect Pin`, [
          {text: 'Cancel'},
        ]);
      

      return;
    }

    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigation.navigate(destination,transactionDetails)
// dispatch(LoginUser)
     
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
    pinRef.current.focus(1234)
  }, [])
  



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
  getUserFromDb()
    });
  
    return unsubscribe;

  }, [navigation])




  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>{transactionDetails?.type} Fund</Text>
        <Text style={styles.textBody}>you are about to {transactionDetails?.type} fund for {transactionDetails?.Purpose} from {transactionDetails?.phone}</Text>

        <View style={styles.currencyWrapper}>
              <CurrencyFormat
                value={transactionDetails?.Amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
                renderText={value => (
                  <Text style={styles.textAmount}>Amount {value}</Text>
                )}
              />
            </View>
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
      {/* <Text style={styles.textForgetPin}>Forgot PIN?</Text> */}

      <View style={styles.btnWrapper}>
        <Button btnText="Complete" onPress={ProcessTransaction} />
      </View>
      {ShowLoader && <Loader message="Proceesing Transaction" />}
    </View>
  );
};

export default Confirmation;


const styles = StyleSheet.create({
    container: {
        backgroundColor: genStyle.bg.backgroundWhite,
        flex: 1,
        alignItems: 'center',
    
        paddingHorizontal: RFValue(20),
      },
    
      btnWrapper: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: RFValue(25),
      },
    
      content: {
        alignSelf: 'center',
        alignItems:'center',
        marginTop: RFValue(100),
        width: '95%',
      },
    
      textHeader: {
        fontSize: RFValue(25),
    
        fontFamily: genStyle.txt.fontHeader,
        color: genStyle.txt.textColorDark,
      },
      textBody: {
        marginTop: RFValue(15),
        fontSize: RFValue(16),
        fontFamily: genStyle.txt.fontHeader,
        color: genStyle.txt.textColorDark,
      },

      textAmount:{
        marginTop: RFValue(10),
        fontSize: RFValue(20),
        fontFamily: genStyle.txt.fontHeader,
        color: genStyle.txt.textColorDark,
      },
    
      textInputWrapper: {
        marginTop: RFValue(15),
        width:'100%'
      
      
      },
      pinInput: {
        marginTop: RFValue(12),
        // paddingLeft: 12,
        textAlign:'center',
        paddingTop:RFValue(10),
        fontSize: RFValue(18),
        backgroundColor: genStyle.bg.backgroundLight,
        borderRadius: 8,
        fontStyle:'italic',
        width:"50%",
        alignSelf:'center',
        letterSpacing:5,
      },
    
      textForgetPin:{
        fontStyle:'italic',
        marginTop: RFValue(20),
        fontSize: RFValue(16),
        fontFamily: genStyle.txt.fontHeader,
        color: genStyle.txt.textColorDark,
      }
})