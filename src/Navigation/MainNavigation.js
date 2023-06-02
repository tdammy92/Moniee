import React,{useEffect,useState} from "react"
import {NavigationContainer} from '@react-navigation/native'
import { useSelector ,useDispatch} from "react-redux";
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';





//local imports
import FirstNavigator from "./FirstNavigator";
import SecondNavigator from "./SecondNavigator";
import {getUserFromDb} from '../store/actions'
import {getData,getDB} from '../services'






function MainNavigation() {

  const [User, setUser] = useState({})



  async function getUser() {
    await getDB("userDetails")
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