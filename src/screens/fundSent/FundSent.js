import {Text, TextInput, View, Dimensions,Image} from 'react-native';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';

//style import
import styles from './FundSent.style';

//Local imports
import {Button, genStyle} from '../../component';
import { sendFund } from '../../store/actions';

const FundSent = ({navigation,route}) => {

  const transactionDetails = route.params;
  const {width, height} = Dimensions.get('screen');
  const dispatch = useDispatch()

  useEffect(() => {
    const amount = Number(transactionDetails.Amount);
    console.log(amount);
  dispatch(sendFund(amount))
  }, [])
  

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
