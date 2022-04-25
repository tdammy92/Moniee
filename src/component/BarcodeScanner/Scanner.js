import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {RFValue} from 'react-native-responsive-fontsize';




//local imports
import {Heading,genStyle} from '../../component'

const Scanner = ({navigation}) => {
  const [COde, setCOde] = useState('');

  const [{cameraRef}] = useCamera(null);

  function barCode(result) {
    console.log(result);


    if (result) {
        navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.Container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        onBarCodeRead={barCode}>
        {/* <View style={styles.topSection}>
            <Text>Scan to Pay</Text>
        </View> */}

        <Heading navigation={navigation} headingText="Scan to pay" />
        <View style={styles.scanSection}></View>
        <View style={styles.BottomSection}>
          <Text style={{
              fontSize:RFValue(18),
              fontFamily:'ABeeZee-Regular'
          }}>Place on Code to automatically scan</Text>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: genStyle.bg.backgroundWhite,
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: RFValue(20),
  },

  topSection: {},
  scanSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(200),
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  BottomSection: {
    height: RFValue(200),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: RFValue(10),
  },
});
