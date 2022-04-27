import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

//local imports
import {genStyle} from '../../component';

const styles = StyleSheet.create({
  container: {
    backgroundColor: genStyle.bg.backgroundWhite,
    flex: 1,
    // alignItems: 'center',

    paddingHorizontal: RFValue(20),
  },

  btnWrapper: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: RFValue(25),
  },

  content: {
    alignSelf: 'center',
    marginTop: RFValue(20),
    width: '95%',
  },

  textHeader: {
    fontSize: RFValue(25),

    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
  },
  textBody: {
    marginTop: RFValue(15),
    fontSize: RFValue(14),
    fontFamily: genStyle.txt.fontBody,
  },

  pinInputWrapper: {
    marginTop: RFValue(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pinInput: {
    marginTop: RFValue(15),
    paddingLeft: 12,
    width: '20%',
    height: '100%',
    paddingTop: RFValue(10),
    fontSize: RFValue(20),

    backgroundColor: genStyle.bg.backgroundLight,

    borderRadius: 8,
  },
  pinTxtInput: {
    fontSize: RFValue(20),

    color: genStyle.txt.textColorDark,

    textAlign: 'center',
  },

  timerWrapper: {
    marginTop: RFValue(25),
    alignSelf: 'center',
  },
  timerText: {
    fontFamily: genStyle.txt.fontBody,
    //   color:"black",
    fontSize: RFValue(16),
  },
  timerTextValue: {
    marginTop: RFValue(15),
    fontFamily: genStyle.txt.fontBody,
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic',
    fontSize: RFValue(16),
  },

  resendBtnContainer:{
    width:"60%",
    alignSelf:'center',
    backgroundColor:genStyle.bg.backgroundDark,
    borderRadius:12,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
resendBtnTxt:{
  color:'white',
  fontSize:RFValue(12),
  paddingHorizontal:15,
},
});

export default styles;
