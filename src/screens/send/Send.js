import React, {useState,useEffect} from 'react';
import {View, Text, TextInput, Image,Alert,TouchableOpacity} from 'react-native';
import CurrencyFormat from 'react-currency-format';
import {useSelector, useDispatch} from 'react-redux';

//Local imports
import styles from './Send.style';
import {Heading, Button} from '../../component';

const Send = ({navigation,route}) => {

  const amount = route.params



  const [Purpose, setPurpose] = useState('')
  const [phone, setphone] = useState('')

  const [Amount, setAmount] = useState();
  const [SelecC, setSelecC] = useState([]);
  const dispatch = useDispatch();

  const contact = useSelector(state => state.ContactReducer);

  const Sls = contact.Selected;

  console.log(Sls);



  function HandleRequest() {
    // if (SelecC.length < 1) {
    //   Alert.alert('Warning', `Please Select number to request from`, [
    //     {text: 'Cancel'},
    //   ]);
    //   return;
    // }


    if (Purpose == '') {
      Alert.alert('Warning', `Please enter purpose to continue request`, [
        {text: 'Cancel'},
      ]);
      return;
    }


    if (phone == '') {
      Alert.alert('Warning', `Please enter Phone number to continue request`, [
        {text: 'Cancel'},
      ]);
      return;
    }

    const transactionDetails = {
      phone,Purpose,Amount,type:'Send'
    }
    navigation.navigate('Confirmation',{transactionDetails,destination:'FundSent'});
  }



  // useEffect(() => {
  //   setAmount(amount)
    
  //   }, [])


    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
        // Do something
        setAmount(amount)
        setSelecC(Sls)
  
      });
  
      return unsubscribe;
    }, [navigation])
  

  return (
    <View style={styles.container}>
      {/* heading component */}
      <Heading navigation={navigation} headingText="Send Money" />
      <View style={styles.content}>
        <View style={styles.amountBox}>
          <View style={styles.amountIcon}></View>
          <View>
            <Text style={styles.amountTitle}>Send</Text>
            {/* <Text  style={styles.amountText}>15,000</Text> */}

            <View style={styles.currencyWrapper}>
              <CurrencyFormat
                value={Amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
                renderText={value => (
                  <Text style={styles.amountText}>{value}</Text>
                )}
              />
            </View>
          </View>
        </View>

        {/* view for pin boxes */}
        <View style={styles.textInputWrapper}>
          <TextInput
          value={Purpose}
            style={styles.textInput}
            keyboardType="default"
            placeholder="Purpose for sending"
            onChangeText={(txt)=>setPurpose(txt)}
          />

          <View style={styles.InputWapper}>
            <TextInput
            value={phone}
              style={styles.txInput}
              keyboardType="number-pad"
              placeholder="Phone number"
              onChangeText={(txt)=>setphone(txt)}
            />

<TouchableOpacity
              style={styles.bookIcon}
              onPress={() => navigation.navigate('Contact')}>
              <Image
                // style={styles.bookIcon}
                source={require('../../../assets/icons/book.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {SelecC.length > 0 ? (
            <Text style={styles.textInput}>
              {SelecC[0]?.givenName} & {(SelecC.length = 1)} other(s)
            </Text>
          ) : null}

      </View>

      <View style={styles.btnWrapper}>
      <Button btnText="Send Money" onPress={HandleRequest} />
      </View>
    </View>
  );
};

export default Send;
