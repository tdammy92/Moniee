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

  amountBox: {
    width: '70%',
    backgroundColor: genStyle.bg.backgroundLight,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: RFValue(80),
    borderRadius: 16,
    paddingHorizontal: RFValue(20),
  },

  amountIcon: {
    borderRadius: 50,
    height: RFValue(55),
    width: RFValue(55),
    backgroundColor: genStyle.bg.backgroundGray2,
    marginRight: RFValue(15),
  },

  amountTitle: {
    fontFamily: genStyle.txt.fontBody,
    fontSize: RFValue(18),
    color: genStyle.txt.textColorDark,
    letterSpacing: 1,
  },

  amountText: {
    color: genStyle.txt.textColorDark,
    fontSize: RFValue(20),
    letterSpacing: 1,
  },
  textInputWrapper: {
    marginTop: RFValue(15),
  },
  textInput: {
    marginTop: RFValue(12),
    paddingLeft: 12,
    paddingTop: RFValue(10),
    fontSize: RFValue(16),
    backgroundColor: genStyle.bg.backgroundLight,
    borderRadius: 8,
    fontStyle: 'italic',
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
