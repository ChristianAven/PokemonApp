import 'react-native-gesture-handler';

import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';
// import StackNavigator from './src/navigation/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <TabsNavigator/>
    </NavigationContainer>
  )
}

export default App;
