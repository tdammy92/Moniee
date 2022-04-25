import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

//Local imports
import genStyle from '../General/genStyle';

const Button = ({btnText,onPress,bgColor,txtColor}) => {
  return (
    <TouchableOpacity style={[styles.container,bgColor]}  onPress={onPress}>
      <Text style={[styles.text,txtColor]}>{btnText}</Text>
    </TouchableOpacity>
  );
};


export const ButtonSmall = ({btnText,onPress}) => {
  return (
    <TouchableOpacity style={styles.smallContainer}  onPress={onPress}>
      <Text style={styles.smalltext}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 45,
    borderRadius: 16,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: genStyle.bg.backgroundDark,
  },
  
  text: {
    color: genStyle.txt.textColorWhite,
    fontSize: RFValue(14),
    fontFamily:'Abel-Regular',
  },


  smalltext: {
    textAlign:'center',
    color: genStyle.txt.textColorDark,
    fontSize: RFValue(14),
    fontFamily:'Abel-Regular',
    letterSpacing:1,
  },


  smallContainer: {
    width: '40%',
    height: 45,
    borderRadius: 16,
  
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: genStyle.bg.backgroundGray2,
  },
});
