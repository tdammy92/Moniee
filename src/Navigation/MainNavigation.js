import React,{useEffect,useState} from "react"
import {NavigationContainer} from '@react-navigation/native'
import { useSelector ,useDispatch} from "react-redux";
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';





//local imports
import FirstNavigator from "./FirstNavigator";
import SecondNavigator from "./SecondNavigator";
import {getUserFromDb} from '../store/actions'

const getData = async (key) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      // console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};




function MainNavigation() {

  const [User, setUser] = useState({})



  async function getUser() {
    await getData("userDetails")
    .then(data => data)
    .then(value => {
     setUser(value)
    })
    .catch(err => console.log(err)).finally(()=>{

      SplashScreen.hide(); // Called from react-native-splash-screen

    }
    )
    
  }



  useEffect(() => {
    getUser()
  }, [])



const stat = User?true:false;


 

 return stat? <SecondNavigator/> : <FirstNavigator/>






  }


  export default MainNavigation;