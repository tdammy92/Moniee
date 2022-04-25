import {
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//style import
import styles from './Contact.style';

//Local imports
import {Button, genStyle} from '../../component';
import { SelectedContact } from '../../store/actions';
const Circle = require('../../../assets/icons/tick-circle.png')
const selectedCircle = require('../../../assets/icons/selected-circle.png')


const Contact = ({navigation, buttonText}) => { 
 
  const [selectedContact, setselectedContact] = useState([]);

  const {width, height} = Dimensions.get('screen');
  const [Contact, setContact] = useState([])
  const dispatch = useDispatch()

  const contact = useSelector(state => state.ContactReducer);

const cts = contact.Contact
 


  //this function check if an item is selected
  function checkSelelctedContact(contactID) {
  
    const selected = selectedContact.map((item)=>item?.recordID)
    const IsSelected = selected.includes(contactID);

    return IsSelected;

  }

  //function select contact from contact list
  function selectContact(contact) {
    const selected = selectedContact.map((item)=>item?.recordID)
    const IsSelected = selected.includes(contact?.recordID)

    if (IsSelected) return
    setselectedContact([...selectedContact, contact]);
  }

  //function to remove contact from list
  function RemoveSelected(contactId) {
    const remainingContact = selectedContact.filter(
      contact => contact?.recordID !== contactId,
    );

    setselectedContact(remainingContact);
  }

  useEffect(() => {
   
    setContact(cts)


   
    
  }, []);
  


  useEffect(() => {

    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // do something

     
      dispatch(SelectedContact(selectedContact))
    });

    return unsubscribe;
    
    
 
  }, [navigation])
  


  


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* selected contact display box*/}

        <View style={styles.topSection}>
          <View style={styles.contactNameView}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={selectedContact}
              keyExtractor={(_, i) => `${i + 1}`}
              renderItem={({item}) => {
                return (
                  <View style={styles.contactSelectedWrapper}>
                    <Text style={styles.slectedText}>{item?.displayName}</Text>
                    <TouchableWithoutFeedback
                      onPress={() => RemoveSelected(item?.recordID)}
                      style={styles.closeIconwrapper}>
                      <Image
                        style={styles.closeIcon}
                        source={require('../../../assets/icons/close-circle.png')}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                );
              }}
            />
          </View>

          {/* selected contact image view */}
          <View style={styles.contactImageViewWrapper}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={selectedContact}
              keyExtractor={(_, i) => `${i + 1}`}
              renderItem={({item}) => {
                return (
                  <View style={styles.selectedImageWrapper}>
                    <TouchableWithoutFeedback
                     onPress={() => RemoveSelected(item?.recordID)}
                    >
                      <Image
                       
                        style={styles.Close2}
                        source={require('../../../assets/icons/close-circle2.png')}
                      />
                    </TouchableWithoutFeedback>

                    <View style={styles.contactSelectedImage}>
                      <Text style={styles.slectedTextIcon}>
                        {item?.displayName?.slice(0, 1)}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View style={styles.bottomLine}></View>
        </View>

        {/* Phone conatct List */}
        <View style={styles.PhoneContact}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Contact}
            keyExtractor={(_, i) => `${i + 1}`}
            renderItem={({item, _}) => {

              const sltd = checkSelelctedContact(item?.recordID)
              return (
                <View style={styles.contactWrapper}>
                  <View style={styles.contactLeft}>
                    <View style={styles.contactListImage}>
                      <Text style={styles.contactTextIcon}>
                        {item?.givenName[0]?.slice(0, 1)}
                      </Text>
                    </View>
                    <View style={styles.contactDetailsWrapper}>
                      <Text style={styles.contactName}>
                        {item?.displayName}
                      </Text>
                      <Text style={styles.contactPhone}>
                        {item?.phoneNumbers[0]?.number}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.contactRight}
                    onPress={() => selectContact(item)}>
                    <Image
                      style={styles.checkImage}
                      source={sltd? selectedCircle:Circle}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button
          btnText={'Request'}
          onPress={() => {
            // navigation.navigate('Home')
            navigation.goBack()
            }}
        />
      </View>
    </View>
  );
};

export default Contact;
