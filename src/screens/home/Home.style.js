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

  headingWrapper: {
    marginTop: RFValue(35),
    paddingHorizontal: RFValue(10),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnWrapper: {
    position: 'absolute',
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent:'space-between',
    bottom: RFValue(100),
  },

  content: {
    alignSelf: 'center',
    marginTop: RFValue(20),
    width: '95%',
  },

  UserText:{
    textAlign: 'center',
    fontStyle: 'italic',
  
    fontSize: RFValue(16),
    fontFamily: genStyle.txt.fontBody,
    color: genStyle.bg.backgroundDark,
  },



  textInputWrapper: {
    marginTop: RFValue(15),
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',

    width: '100%',
  },
  amountIcon: {
    color: genStyle.txt.textColorDark,
      fontSize: RFValue(35),
    //   textDecorationColor:'black',
    //   textDecorationLine:'line-through',
      
  },
  amountInput: {
    color: genStyle.txt.textColorDark,
      fontSize: RFValue(45),
fontFamily:genStyle.txt.fontHeader,
    fontStyle: 'italic',
    alignSelf: 'center',
  },

  balanceBox: {
    backgroundColor: genStyle.bg.backgroundLight,
    padding: RFValue(10),
    width: RFValue(150),
    alignSelf: 'center',
    borderRadius: 12,
  },

  balanceText: {
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: genStyle.txt.fontBody,
  },
  currencytext: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: RFValue(10),
    fontSize: RFValue(14),
    fontFamily: genStyle.txt.fontBody,
    color: genStyle.bg.backgroundDark,
  },
});

export default styles;
