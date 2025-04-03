import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LanguageScreen from '../../Pages/Language'


const Stack = createStackNavigator();

const OnboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName="LanguageScreen">
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      {/* <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          tabBarStyle: {display: 'none'},
          detachPreviousScreen: false, // Keep the previous screen mounted
        }}
      /> */}
    </Stack.Navigator>
  );
};


export const Approutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen component={OnboardStack} name="OnboardStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
