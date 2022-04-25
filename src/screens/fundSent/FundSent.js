import {Text, TextInput, View, Dimensions,Image} from 'react-native';
import React from 'react';


//style import
import styles from './FundSent.style';

//Local imports
import {Button, genStyle} from '../../component';

const FundSent = ({navigation,route}) => {

  const transactionDetails = route.params;
  const {width, height} = Dimensions.get('screen');



  return (
    <View style={styles.container}>
      <View style={styles.content}>


      <Image  source={require('../../../assets/icons/Oval.png')}/>
        <Text  style={styles.textHeader}>Money sent</Text>

        <Text style={styles.textBody}>Money for {transactionDetails?.Purpose} has been sent to {transactionDetails?.phone}</Text>
        

      
      </View>

      <View style={styles.btnWrapper}>
        <Button btnText="Kari me go house" onPress={()=>navigation.navigate('Home')}  bgColor={{backgroundColor:genStyle.bg.backgroundGray2}}  txtColor={{color:genStyle.txt.textColorDark}}/>
      </View>
    </View>
  );
};

export default FundSent;
