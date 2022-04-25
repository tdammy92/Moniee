import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

//local imports
import genStyle from '../General/genStyle';

const Loader = ({message}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={genStyle.bg.backgroundDark}
        animating={true}
      />

      <Text style={styles.messageText}>{message}...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    left: 0,
    top: 0,
    bottom: 0,
    right: 0,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: genStyle.bg.backgroundLight,
    opacity: 0.4,
    elevation: 1,
  },

  messageText: {
      marginTop:5,
  fontSize:RFValue(16),
  fontFamily:genStyle.txt.fontHeader,
  },
});
