import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//local imports

import {
  SignUp,
  Login,
  Verify,
  BankDetails,
  Pin,
  VerifyPin,
  Home,
  Send,
  Request,
  ResquestSent,
  FundSent,
  Contact,
  Scanner,
  Confirmation
} from '../screens';
import HomeTabs from './TabNav';

function SecondNavigator() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="VerifyPin" component={VerifyPin} />
      <Screen name="Home" component={HomeTabs} />
      <Screen name="Scanner" component={Scanner} />
      <Screen name="Send" component={Send} />
      <Screen name="Request" component={Request} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="ResquestSent" component={ResquestSent} />
      <Screen name="FundSent" component={FundSent} />
      <Screen name="Contact" component={Contact} />
    </Navigator>
  );
}

export default SecondNavigator;
