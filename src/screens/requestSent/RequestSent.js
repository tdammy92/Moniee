import {Text, TextInput, View, Dimensions,Image} from 'react-native';
import React from 'react';


//style import
import styles from './RequestSent.style';

//Local imports
import {Button, genStyle} from '../../component';

const ResquestSent = ({navigation,route}) => {
  const transactionDetails = route.params;

  const {width, height} = Dimensions.get('screen');
console.log(transactionDetails)


  return (
    <View style={styles.container}>
      <View style={styles.content}>


      <Image  source={require('../../../assets/icons/Oval.png')}/>
        <Text  style={styles.textHeader}>Request sent</Text>

        <Text style={styles.textBody}>Your request for {transactionDetails?.Purpose} has been sent to {transactionDetails?.phone} </Text>
        

      
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Go Home" onPress={()=>navigation.navigate('Home')}  bgColor={{backgroundColor:genStyle.bg.backgroundGray2}}  txtColor={{color:genStyle.txt.textColorDark}}/>
      </View>
    </View>
  );
};

export default ResquestSent;
