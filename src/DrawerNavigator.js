import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

// Create the drawer navigator
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="FirstPage">
        <Drawer.Screen name="FirstPage" component={FirstPage} />
        <Drawer.Screen name="SecondPage" component={SecondPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
