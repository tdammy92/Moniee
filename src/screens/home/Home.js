import React, {useState,useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity,Image,Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {RFValue} from 'react-native-responsive-fontsize';
import CurrencyFormat from 'react-currency-format';
import {useSelector, useDispatch} from 'react-redux';

//Local imports
import {ButtonSmall} from '../../component';
import styles from './Home.style';
import { LogoutUser } from '../../store/actions';
import {removeData} from '../../services'


const Home = ({navigation}) => {

  const [user, setuser] = useState({})
  const [transaction, settransaction] = useState({})
  const [amount, setamount] = useState();

  const User = useSelector(state => state.UserReducer.User);
  const Transaction = useSelector(state => state.TransactionReducer);


  const Usr = JSON.parse(User)



// const dispatch = useDispatch()



function HandleTransction(rout) {
  if (rout=='Request') {

    if (amount == '') {
      Alert.alert('Warning', `Please enter amount to request`, [{text: 'Cancel'}]);
      return;
    }
    
    navigation.navigate(rout,amount)
    return;
  } 



  if (rout=='Send') {
      if (amount == '') {
      Alert.alert('Warning', `Please enter amount to send`, [{text: 'Cancel'}]);
      return;
    }
    navigation.navigate(rout,amount)
    return;
  } 
}


// useEffect(() => {
// removeData('userDetails')
// }, [])



useEffect(() => {

  setuser(Usr)
  settransaction(Transaction)
}, [])

// 09045675434 1234 
// console.log(transaction);
  return (
    <View style={styles.container}>
      {/* Heading section */}
      <View style={styles.headingWrapper}>
        <TouchableOpacity 
        //  onPress={()=>navigation.navigate('Scanner')}
         >
       

          <Image  source={require('../../../assets/icons/scan-barcode.png')}/>
        </TouchableOpacity>

        <Text  style={styles.UserText}>Hi {user?.Phone}</Text>

        <TouchableOpacity>
          {/* <Fontisto name="clock" size={30} color="black" onPress={() => {}} /> */}

          
          <Image  source={require('../../../assets/icons/clock.png')}/>
        </TouchableOpacity>
      </View>

      {/* body section */}
      <View style={styles.content}>
        {/* view for amount input boxes */}
        <View style={styles.textInputWrapper}>
          {/* <Text style={styles.amountIcon}>N</Text> */}
          <Text style={styles.amountIcon}>₦</Text>

          <View>
            <CurrencyFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={true}
              //   prefix={'₦'}
              renderText={value => (
                <TextInput
                  style={styles.amountInput}
                  placeholder="0"
                  placeholderTextColor={'black'}
                  keyboardType="number-pad"
                  value={value}
                  onChangeText={text => setamount(text)}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.balanceBox}>
          <Text style={styles.balanceText}>Wallet Balance</Text>

          <View style={styles.currencyWrapper}>
            <CurrencyFormat
              value={transaction?.balance}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
              renderText={value => (
                <Text style={styles.currencytext}>{value}</Text>
              )}
            />
          </View>
        </View>

      </View>
        <View style={styles.btnWrapper}>
          <ButtonSmall
            btnText="Request"
            onPress={() =>HandleTransction('Request') }
          />
          <ButtonSmall
            btnText="Send"
            onPress={() =>HandleTransction('Send') }
          />
        </View>
    </View>
  );
};

export default Home;
