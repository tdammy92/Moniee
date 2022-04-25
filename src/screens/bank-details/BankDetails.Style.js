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
    alignSelf:'center',
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

  textInputWrapper: {
    marginTop: RFValue(15),
  
  },
  textInput: {
    marginTop: RFValue(12),
    paddingLeft: 12,
    paddingTop:RFValue(10),
    fontSize: RFValue(16),
    backgroundColor: genStyle.bg.backgroundLight,
    borderRadius: 8,
    fontStyle:'italic'
  },

  InputWapper: {
    flexDirection: 'row',
    backgroundColor: genStyle.bg.backgroundLight,
    marginTop: RFValue(12),
    alignItems: 'center',
    borderRadius: 8,
  },

  txInput: {
    fontSize: RFValue(16),
    paddingLeft: 12,
    fontStyle: 'italic',

  },


  bookIcon:{
      height:RFValue(25),
      width:RFValue(25),
      position:'absolute',
      right:RFValue(10),
  }

});

export default styles;
