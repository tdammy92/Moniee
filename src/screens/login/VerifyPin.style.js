import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

//local imports
import {genStyle} from '../../component';

const styles = StyleSheet.create({
  container: {
    backgroundColor: genStyle.bg.backgroundWhite,
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: RFValue(20),
  },

  btnWrapper: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: RFValue(25),
  },

  content: {
    alignSelf: 'center',
    alignItems:'center',
    marginTop: RFValue(100),
    width: '95%',
  },

  textHeader: {
    fontSize: RFValue(25),

    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
  },
  textBody: {
    marginTop: RFValue(15),
    fontSize: RFValue(16),
    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
  },

  textInputWrapper: {
    marginTop: RFValue(15),
    width:'100%'
  
  
  },
  pinInput: {
    marginTop: RFValue(12),
    // paddingLeft: 12,
    textAlign:'center',
    paddingTop:RFValue(10),
    fontSize: RFValue(18),
    backgroundColor: genStyle.bg.backgroundLight,
    borderRadius: 8,
    fontStyle:'italic',
    width:"50%",
    alignSelf:'center',
    letterSpacing:5,
  },

  textForgetPin:{
    fontStyle:'italic',
    marginTop: RFValue(20),
    fontSize: RFValue(16),
    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
  }
});

export default styles;
