import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import FirstTab from './screens/FirstTab';
import SecondTab from './screens/SecondTab';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="FirstTab">
        <Tab.Screen name="FirstTab" component={FirstTab} />
        <Tab.Screen name="SecondTab" component={SecondTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
