import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import genStyle from '../General/genStyle';




const Heading = ({navigation,headingText}) => {
  return (
    <View style={styles.HeadingContainer}>
      <TouchableOpacity>
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      {headingText? <Text style={styles.headText}>{headingText}</Text>: null}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
    HeadingContainer:{
        marginTop: RFValue(75),
        flexDirection:'row'
    },

    headText:{
      alignItems:'center',
      fontSize:RFValue(18),
      marginLeft:RFValue(10),
      color:genStyle.txt.textColorDark
    }
});
