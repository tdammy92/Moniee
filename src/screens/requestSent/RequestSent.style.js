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
    marginTop: RFValue(100),
    width: '95%',
    alignItems:'center',
    justifyContent:'center',
    height:'65%'
  },
  
  textHeader: {
      fontSize: RFValue(30),
      
      marginTop: RFValue(60),
    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
    textAlign:"center"
  },
  textBody: {
    marginTop: RFValue(15),
    fontSize: RFValue(20),
    fontFamily: genStyle.txt.fontHeader,
    color: genStyle.txt.textColorDark,
    textAlign:"center",
    lineHeight:25,
    letterSpacing:1,
  },


 
});

export default styles;
