import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation.ts';
import Colors from '../styles/Colors.ts';
import {createStackNavigator} from '@react-navigation/stack';
import Stacks from './consts/stacks.ts';
import {MainStack} from './stacks';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer
      ref={Navigation.navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Colors.black,
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Stacks.MAIN_STACK} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
