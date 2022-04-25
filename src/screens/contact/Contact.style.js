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
    marginTop: RFValue(30),
    width: '95%',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  topSection: {
    width: '100%',
    height: '25%',
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1,
  },

  contactNameView: {
    width: '100%',
    height: RFValue(50),
    backgroundColor: genStyle.bg.backgroundLight,
    borderRadius: RFValue(10),
  },

  contactSelectedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },

  slectedText: {
    fontSize: RFValue(14),
    fontFamily: genStyle.txt.fontBody,
  },

  //   closeIconwrapper:{

  //   },

  closeIcon: {
    marginLeft: RFValue(10),
    height: RFValue(20),
    width: RFValue(20),
  },
  contactImageViewWrapper: {
    marginTop: RFValue(10),
    // height: 100,
    width: '100%',


   
  
  },


  selectedImageWrapper:{
      marginTop:RFValue(10),
      marginBottom:RFValue(10),
      marginRight:5,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:10,
  
  
  },

  contactSelectedImage: {
    height: RFValue(48),
    width: RFValue(48),
    backgroundColor: '#EB5757',
    borderRadius: 50,
    marginLeft: RFValue(20),
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  slectedTextIcon: {
    fontSize: RFValue(15),
    fontFamily: 'Poppins-Bold',
    color: 'red',
  },

  Close2: {
    position: 'absolute',
    top: -2,
    right: -5,
  },


  bottomLine:{
      width:'100%',
      height:2,
      backgroundColor:genStyle.bg.backgroundLight
  },
  PhoneContact: {
    height: '65%',
    width: '100%',
    marginTop: RFValue(5),
    marginBottom: RFValue(10),
  },

  contactWrapper: {
    marginTop: RFValue(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  contactLeft: {
    flexDirection: 'row',
  },

  contactRight:{
     
  },

  contactListImage: {
    height: RFValue(40),
    width: RFValue(40),
    backgroundColor: '#6FCF97',
    borderRadius: 50,
    marginLeft: RFValue(20),
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactTextIcon: {
    fontSize: RFValue(15),
    fontFamily: 'Poppins-Bold',
    color: '#27AE60',
  },

  contactDetailsWrapper: {
    marginLeft: RFValue(10),
  },
  contactName: {
      fontSize:RFValue(12),
      fontFamily:genStyle.txt.fontBody
  },
  contactPhone: {
    fontSize:RFValue(12),
    fontFamily:genStyle.txt.fontBody,
    color:genStyle.txt.textColorDark
  },

  checkImage:{
    height:RFValue(25),
    width:RFValue(25),
  }
});

export default styles;
