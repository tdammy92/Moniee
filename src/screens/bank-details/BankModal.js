import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';

import {RFValue} from 'react-native-responsive-fontsize';

//local imports
import {BanksDb} from '../../services';
import {genStyle} from '../../component';

const BankModal = ({setShowModal, ShowModal,BankDetails, setBankDetails}) => {
  
  
  
  const [BanksList, setBanksList] = useState(BanksDb);
 
 
  return (
    <Modal animationType="slide" transparent={true} visible={ShowModal} >
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.wrapper}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalTitleText}>Select your Bank</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={BanksList}
              keyExtractor={({code}, i) => `${code}${i}`}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.bankNameWrapper}  onPress={()=>{
                    setBankDetails({...BankDetails,Bank:item.bank})
                    setShowModal(false)
                  }}>
                    <Text style={styles.bankName}>{item.bank}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BankModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RFValue(20),
    backgroundColor: genStyle.bg.backgroundLight,
    borderColor:genStyle.bg.backgroundGray2,borderWidth:1,
    elevation:2,
    borderRadius:15,
  },

  modalTitle: {
    height: RFValue(50),
    alignItems:'center',
    justifyContent:'center'
  },

  modalTitleText: {
    fontSize:RFValue(20),
    paddingVertical:5

  },
  wrapper: {
    height: '80%',
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  bankNameWrapper: {
    paddingVertical: RFValue(10),
    borderBottomColor: genStyle.bg.backgroundGray2,
    borderBottomWidth: 1,
  },

  bankName: {
    fontSize: RFValue(18),
    marginTop: RFValue(5),
    marginLeft:RFValue(10)
  },
});
