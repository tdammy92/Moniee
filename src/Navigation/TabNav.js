
import React from "react"
import {View,Text,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SignUp,Login,Verify,BankDetails,Pin,VerifyPin,Home,Send,Request,ResquestSent,FundSent,Contact} from '../screens'

const {Navigator,Screen} = createBottomTabNavigator();


function SettingsScreen() {
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text  style={{fontSize:30}}>User</Text>
        </View>
    )
}
function Profile() {
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Profile</Text>
        </View>
    )
}

function HomeTabs() {
  return (
    <Navigator

    
screenOptions={
        {
           
headerShown:false,
tabBarShowLabel:false,
            showLabel:false,
            activeTintColor:'gray',
            tabBarStyle:{
                height:50,
                borderTopWidth:0,
                elevation:0,
                // backgroundColor:'transparent',
            }
            
        }
    }


    >
      <Screen name="HomeScreen" component={Home} options={{
          tabBarIcon:({focused,color})=>(
             
              <View  style={{padding:5, marginBottom:focused? 15 : null}}>
               <Image style={{height:focused? 30:25 ,width:focused?30:25}} source={require('../../assets/icons/icon1.png')}/>

              </View>
          )
      }} />
      <Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon:({focused,color})=>(
             
              <View  style={{padding:5, marginBottom:focused? 15 : null}}>
               <Image style={{height:focused? 30:25 ,width:focused?30:25}} source={require('../../assets/icons/icon2.png')}/>

              </View>
          )
      }}/>
      <Screen name="Profile" component={Profile} options={{
          tabBarIcon:({focused,color})=>(
             
              <View  style={{padding:5, marginBottom:focused? 15 : null}}>
               <Image style={{height:focused? 30:25 ,width:focused?30:25}} source={require('../../assets/icons/icon3.png')}/>

              </View>
          )
      }}/>
    </Navigator>
  );
}

export default HomeTabs;