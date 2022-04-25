import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Local imports
import styles from './BankDetails.Style';
import {Heading, Button,Loader} from '../../component';

import BankModal from './BankModal';

const BankDetails = ({navigation, route}) => {
  const PhoneNumber = route.params;

  console.log(PhoneNumber);

  const [ShowLoader, setShowLoader] = useState(false);

  const [ShowModal, setShowModal] = useState(false);

  const [BankDetails, setBankDetails] = useState({
    Bank: '',
    Account: '',
    BVN: '',
  });

  function ProccedNextScreen() {
    //run if bank is not selected
    if (BankDetails.Bank === '') {
      Alert.alert('Warning', `Please Select your bank to continue`, [
        {text: 'Cancel'},
      ]);
      return;
    }

    //this code runs if account number is empty
    if (BankDetails.Account === '') {
      Alert.alert('Warning', `Please Enter your accont  number to continue`, [
        {text: 'Cancel'},
      ]);
      return;
    }

    //this code runs if account nyumber is less than ten char
    if (BankDetails?.Account?.length < 10) {
      Alert.alert('Warning', `Please enter a valid account number`, [
        {text: 'Cancel'},
      ]);
      return;
    }

    //this code runs if BVN number is empty
    if (BankDetails.BVN === '') {
      Alert.alert('Warning', `Please Enter your BVN to continue`, [
        {text: 'Cancel'},
      ]);
      return;
    }

    //this code runs if BVN nyumber is less than ten char
    if (BankDetails?.BVN?.length < 10) {
      Alert.alert('Warning', `Please enter a valid BVN`, [{text: 'Cancel'}]);
      return;
    }

    const userDetails = {
      Phone: PhoneNumber,
      BankDetails,
    };

      //this timeout is simulating APi call
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false)
      
     
        navigation.navigate('Pin', userDetails);
      }, 2000);

  }

  return (
    <View style={styles.container}>
      <Heading navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.textHeader}>Add your bank details</Text>
        <Text style={styles.textBody}>
          Kindly ensure the details you enter belong to you.
        </Text>

        {/* select bank drop down */}
        <View style={styles.textInputWrapper}>
          <View style={styles.InputWapper}>
            <TextInput
              style={styles.txInput}
              value={BankDetails.Bank}
              placeholder={'Access Bank'}
              on
            />

            <TouchableOpacity
              style={styles.bookIcon}
              onPress={() => setShowModal(true)}>
              <AntDesign name="down" size={25} color="gray" />
            </TouchableOpacity>
          </View>

          {/* enter account number input */}
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Account number"
            onChangeText={(act)=>setBankDetails({...BankDetails,Account:act})}
          />

          {/* Bvn input */}
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="BVN"
            onChangeText={(bvn)=>setBankDetails({...BankDetails,BVN:bvn})}
          />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Save and Continue" onPress={ProccedNextScreen} />
      </View>

      <BankModal
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        BankDetails={BankDetails}
        setBankDetails={setBankDetails}
      />

{ShowLoader&&  <Loader message='Verifing OTP'/>}
    </View>
  );
};

export default BankDetails;
